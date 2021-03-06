import logo from './logo.svg';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {

  
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="App">
                  <Main />
              </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

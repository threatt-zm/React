import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCampsite({campsite}) {
    return (
        <div class="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments, campsite}) {
    if(comments) {
        return(
            <div class="col-md-5 m-1" align="left">
                <h4>Comments - {campsite.name}</h4>
                {
                    comments.map(comment => {
                        return(
                            <div>
                            <p>{comment.text}</p>
                            <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            <br />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    return <div />
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} campsite={props.campsite} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;
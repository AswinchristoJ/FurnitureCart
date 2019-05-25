import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
} from 'reactstrap';

const card = (props) => {
    return (

        <Card body outline color="danger"
            style={{
                fontSize:"13px",
                height: "300px",
                width: "200px",
                flex: "0 1 auto",
                overflow: "auto",
                margin: "2px",
                padding: "0px"
            }}>
            <CardImg
                style={{
                    objectFit: "scale-down",
                    height: "200px"
                }}
                top width="100%"
                src={props.link}
                alt="Card image cap" />

            <CardBody style={{ padding: "0px" }}>

                <CardTitle className="shadow-sm" style={{
                    fontSize:"16px",
                    paddingTop: "10px",
                    fontWeight: "500"
                }}>Rupees : {props.cost}</CardTitle>

                <CardSubtitle style={{ color: "dodgerblue" }}>Title : {props.title}</CardSubtitle>
                <Button>Add2Cart</Button>
            </CardBody>
        </Card>

    );
};

export default card;
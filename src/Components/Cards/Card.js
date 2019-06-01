import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
} from 'reactstrap';

const card = (props) => {
    return (
        <div>
        <Card body 
            style={{
                fontSize:"13px",
                height: "350px",
                width: "200px",
                flex: "0 1 auto",
                overflow: "",
                margin: "5px",
                padding: "10px"
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

                <CardSubtitle style={{ color: "dodgerblue",
                                        height:"40px",
                                        overflow:"hidden"
             }}>Title : {props.title}</CardSubtitle>
             <div style={{
                 display:"flex",
                 justifyContent:"center"
             }}>
             <Button color="primary" className="container" size="sm">Add2Cart</Button>
             </div>
                
            </CardBody>
        </Card>
             </div>
    );
};

export default card;
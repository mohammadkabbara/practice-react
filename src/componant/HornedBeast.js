import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button'



class HornedBeast extends React.Component {
    render() {
        return (

            <>
                {/* <h2>
                {this.props.title}
            </h2>
            <img src={this.props.image_url}>

            </img>
            <p>
                {this.props.description} {this.props.horns}
            </p> */}
                <Col>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.image_url} />
                        <Card.Body>
                            <Card.Title> {this.props.description}</Card.Title>
                            <Card.Text>
                            
                            {this.props.title}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </>
        )
    }
};

export default HornedBeast
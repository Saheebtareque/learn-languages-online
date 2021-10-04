import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { ButtonGroup, Button, Card, Col } from 'react-bootstrap';
import './Courses.css';

const Courses = (props) => {
    const { img, name , coursefee }=(props.course);
    return (
        <Col>
            <Card>
                <Card.Img className="img-size" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Course fee: {coursefee}
                        <Button> See more details  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Courses;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Services.css';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div>
            <h1 className="header">All Services that we provide : </h1>
               {
        courses.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-5">
            {
              courses.map(course => <Courses course={course}
                key={course.key}
              ></Courses>)
            }
          </Row>
      }
        </div>
    );
};

export default Services;
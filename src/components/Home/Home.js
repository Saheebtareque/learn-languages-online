import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div>
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

export default Home;
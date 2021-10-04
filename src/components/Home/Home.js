import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./premiumcourses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (

      <div>

          <div>
          <h3 className="main-style">Our main goal is to:  <q>Build a future where people face no difficulty in speaking different languages.</q></h3>
          </div>
         
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
      </div>
    );
};

export default Home;
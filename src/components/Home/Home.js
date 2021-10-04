import React from 'react';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);
    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;
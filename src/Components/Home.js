import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2> Home</h2>
            <ul>
                <li> <Link to='/adduser' > Add User</Link> </li>
                <li> <Link to='/updateuser' > Update User</Link> </li>
            </ul>
        </div>
    );
};

export default Home;
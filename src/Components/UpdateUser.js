import React from 'react';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
    return (
        <div>
            <h2> Update User</h2>
            <ul>
                <li> <Link to='/adduser' > Add User</Link> </li>
                <li> <Link to='/' > Back to home</Link> </li>
            </ul>
        </div>
    );
};

export default UpdateUser;
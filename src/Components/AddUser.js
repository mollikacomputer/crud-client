import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};
        console.log(user);

    }
    return (
        <div>
            <h2> Add User</h2>
            <li> <Link to='/updateuser' > update User</Link> </li>
            <li> <Link to='/' > Back to home</Link> </li>
            <form onSubmit={handleAddUser} >
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <input type="submit" name='submit' value="add user" />
            </form>
        </div>
    );
};

export default AddUser;
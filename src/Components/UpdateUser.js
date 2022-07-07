import React from "react";
import { Link } from "react-router-dom";

const UpdateUser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};
        console.log(user);
        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then( data => {
            console.log('success', data);
            event.target.reset();
        })
    }
  return (
    <div>
      <h2> Update User</h2>
      <ul>
        <li>
          <Link to="/adduser"> Add User</Link>
        </li>
        <li>
          <Link to="/"> Back to home</Link>
        </li>
      </ul>
   
        <form onSubmit={handleAddUser} style={{marginTop: "50px"}} >
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="submit" name="submit" value="Add User" />
        </form>
    </div>
  );
};

export default UpdateUser;

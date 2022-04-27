import React, {useEffect, useState} from 'react';
import axios from 'axios';

const RandomUsers = () =>{
    const [users, setUsers] = useState({});

    useEffect(()=>{
        getUsers();
        console.log(users);        
    },[])

    const getUsers = () =>{
        const random = Math.floor(Math.random()*10)+1;
        axios.get(`https://jsonplaceholder.typicode.com/users/${random}`)
        .then((res)=>{
            console.log(res.data);
             const newUser = res.data;             
            setUsers(newUser);
        })
    }

    const reSet = () =>{
        getUsers();
    }

    return(
        <>
            <div>
                <button onClick={()=>reSet()}>Reset</button>
                <h3>User Data</h3>
                <p><strong>Name: </strong>{users.name}</p>
                <p><strong>Website: </strong>{users.website}</p>
                <p><strong>Email: </strong>{users.email}</p>
                <p><strong>Phone: </strong>{users.phone}</p>
            </div>
        </>
    )
}

export default RandomUsers;

//name, website, email, phone,
import React from 'react'
import {useState,useEffect} from 'react';
import User from './user';
import {mocked} from './mockedData';
import Link from 'next/link';

const Users = () => {
const [users, setUsers] = useState(mocked)
// useEffect(()=>{
//   setUsers()
// })
  return (
    <ul>
      {users.map(({name, id}) =>  <User name={name} id={id}/>
      )}
    </ul>
  )
}

export default Users;


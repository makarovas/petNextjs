import React from 'react'
import Link from 'next/link';
import Users from './users';

const Index = () => {
  return (
    <>
      <ul className="navbar">
          <li>
            <Link href="/">
              <a className="link">Home</a>
            </Link>
          </li>
          <li> 
            <Link href="/users">
              <a className="link">users</a>
            </Link>
          </li>
          <style jsx>
            {`
              .navbar {
                border: 1px solid yellow;
                display: flex;
                list-style-type: none;
                background: orange;
                padding: 15px;
                font-family: Arial;
              }
              .link {
                text-decoration: none;
                color: white;
                font-size: 20px;
                margin: 20px;
              }
            `}
          </style>
      </ul>
    <Users />
    </>
  )
}

export default Index;

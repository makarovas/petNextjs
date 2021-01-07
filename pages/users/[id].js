import React from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';
export default function() {
  const {query} = useRouter();
  console.log(query)
  return (
    <div>
      <h1>{`User with id:${query.id}`}</h1>
    </div>
  )
}

{/* <li key={id}>
      <Link href={`/users/${id}`}>
        <a >{name}</a>
      </Link>
    </li> */}

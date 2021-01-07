import React from 'react'
import Link from 'next/link';

export default function User({name, id}) {
  return (
    <li key={id}>
      <Link href={`/users/${id}`}>
        <a >{name}</a>
      </Link>
    </li>
  )
}


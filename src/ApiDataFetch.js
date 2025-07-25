import React from 'react'
import UseFetch from './UseFetch'
const ApiDataFetch = () => {
    const{data,loading}=UseFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
        <h2>ApiDataFetch</h2>
        <ul>
            {data.map(user=><li key={user.id}>{user.name} - {user.email}</li>)}
        </ul>
    </div>
  )
}

export default ApiDataFetch
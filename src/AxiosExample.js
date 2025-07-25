import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const AxiosExample = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("").then(res=>setUsers(res.data))

    },[])
  return (
    <div>
        <h2>AxiosExample</h2>
        <ul>
            {users.map(user=><li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}
export default AxiosExample
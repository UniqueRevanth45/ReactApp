import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch(url)
            const json=await res.json()
            setData(json)
            setLoading(false)
        }
        fetchData()
    },)
  return{data,loading} 
}

export default UseFetch
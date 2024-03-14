import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Darshanpatil29')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data=useLoaderData()
    console.log(data);
  return (
    <div className='bg-gray-600 text-center m-4 p-4 text-3xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Git Avatar" width={250}/>
    </div>
  )
}

export default Github

export const githubInLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Darshanpatil29')
    return response.json()
}
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication=true}) {
    const [loader, setLoader]=useState(true)
   
   const naviagte = useNavigate()

   const authStatus=useSelector((state)=>state.auth.status)
    useEffect(()=>{
        if(authentication && !authStatus){
            naviagte('/login')
        }
        else if(!authentication && authStatus){
            naviagte('/')
        }
        setLoader(false)
    },[authStatus,naviagte,authentication])
  return (
    loader ?<h1>Loading...</h1>:<>{children}</>
  )
}

import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/bootstrap.min.css'
export default function Listado() {
    const tokenUs = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(()=>{
        if(!tokenUs){
            navigate("/")
        }
    }, [navigate])

  return (
    <div>
            <h2>listado</h2>
    </div>
  )
}

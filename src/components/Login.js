import axios from 'axios'
import React, { useEffect } from 'react'
import '../styles/Login.css'
import swAlert from 'sweetalert';
import {  useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate()


    const submitHandler = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(email == "" || password == ""){
            swAlert("Error!", "Fields cannot be empty!", "error")
            return
        }
        if(email !== "" && !re.test(email)){
            swAlert("Sorry!", "Enter a valid email", "warning")
            return;
        }
        if(email !== "challenge@alkemy.org" || password !== "react"){
            swAlert("Error!", "Credential invalid", "warning")
            return;
        }
        axios.post("http://challenge-react.alkemy.org", {email,password})
        .then(response =>{
            swAlert({
                title: "Perfecto!",
                text: "Conectado exitosamente!",
                icon: "success",
              });
                // swAlert("Perfect!", "Logged successfully!", "success",{
                //     customClass:"modal"
                // })
                const tokenUs = response.data.token
                console.log(tokenUs)
                sessionStorage.setItem("token", tokenUs)
                 navigate("/listado")
            })

    }

    const tokenUs = sessionStorage.getItem("token")

    useEffect(()=>{
        if(tokenUs){
            navigate("/listado")
        }
    }, [])
            

  return (
    <>
 
        <div className='login-container'>
        <form onSubmit={submitHandler}>
            <div className='login-form'>
                <input className='login-input' type="text" name="email" placeholder="example@gmail.com" />
                <input className='login-input' type="password" name="password" placeholder="password" />
                <button className='login-button' type='submit'>Send</button>
            </div>
        </form>
        </div>
    </>
  )
}

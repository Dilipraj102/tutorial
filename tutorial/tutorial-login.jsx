import axios from "axios"
import { response } from "express"
import { useFormik } from "formik"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function TutorialLogin()
{
  
    const[cookie,setCookie,removeCookie]=useCookies()
    const navgate = useNavigate()
    const [users,setUsers] = useState([])
    const formik = useFormik({
        initialValues:{
            "UserId":"",
            "Password":""
        },
        onSubmit :(customer)=>{
            axios({
                method:"get",
                url:"http://127.0.0.1:7788/customers "
            })
            .then(response=>{
                setUsers(response.data)
                for(var user of users){
                    if(user.UserId==customer.UserId && user.Password ==customer.Password){
                        setCookie("userid",customer.UserId,{expires:new Date('2023-08-08')});
                       navgate("/videos")
                    }else{
                        navgate("/error")
                    }
                }
            })
        }
    })

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>User Id</dt>
                    <dd><input name="UserId" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button>Login</button>
                <p>
                    <Link to="/register">New User Register</Link>
                </p>
            </form>
        </div>
    )
}
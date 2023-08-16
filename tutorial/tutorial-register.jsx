import { useFormik } from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { hasFormSubmit } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
import { response } from "express"



export function TutorialRegister()
{
   const [colorClass,setColorClass]= useState('')
    const [userError,setUserError]= useState('')
    const [users,setUsers] = useState([])
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            "UserId":"",
            "UserName":"",
            "Password":"",
            "Age":0,
            "Email":"",
            "Mobile":""
        },
        onSubmit:(values)=>{
            axios({
                method:"post",
                url:" http://127.0.0.1:7788/registercustomer",
                data:values
            })
            alert("Registered Successfully..");
            navigate("/login")
        }
    })
    function VerifyUserId(e){
       axios({
        method:"get",
        url:"http://127.0.0.1:7788/customers "
       })
       .then(response=>{
         setUsers(response.data);
         for(var user of users){
            if(user.UserId===e.target.value){
                   setUserError('UserId Take - try Another')
                   setColorClass('text-danger')
                   break;
            }else{
                setUserError('UserId Available')
                setColorClass('text-success')
            }
        }
       })
    }
    return(
        <div>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd className={colorClass}><input type="text" onKeyUp={VerifyUserId} name="UserId" onChange={formik.handleChange} /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                </dl>
                <button>Register</button>
                <p>
                    <Link to="/login">Existing User Login</Link>
                </p>
            </form>
        </div>
    )
}
import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import DashBoard from "./DashBoard"
function Login (){
    const  [email,setEmail]  = useState(null)
    const [pass,setPass]=useState(null)
    const navigate =  useNavigate()
    const  {signIn}  =  useAuth()
    async function handleSubmit(e){
        e.preventDefault()
        try{
            await signIn(email,pass)
            console.log("done")
            navigate("/dashboard")
            
        }catch(err){
            console.log(err)
        }
    }
   
    return (
      
        <div style={{display:"flex",flexDirection:"column"}}>
            <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setEmail(e.target.value)}/>
<input  onChange={(e)=>setPass
    (e.target.value)}/>
<button type="submit">→</button>

        </form>
         <NavLink to="/register">Don't have an account? Register</NavLink>  
        </div>
     
      
    )
}
export default Login;
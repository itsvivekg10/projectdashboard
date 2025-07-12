import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"
function Register (){
    const navigate  =  useNavigate()
    const {signUp}  = useAuth()
const  [email,setEmail]=useState("")
const [pass,setPass]=useState("")
async function handleSubmit(e){
       e.preventDefault();
try{
    await signUp(email,pass)
    navigate("/dashboard")
    console.log("success")
}catch(err){
    console.log(err)
}
}
return  (
    <>
   <form onSubmit={handleSubmit}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPass(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
    </>
)
}
export default  Register
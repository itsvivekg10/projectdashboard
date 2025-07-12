import { useState } from "react";
import { useInput } from "../../context/AddProjectContext";
function  AddProject(){
    const [projectName ,setprojectName]=useState("")
    const  [projectDetais,setProjectDetails]=useState("")
    const {addPro} =useInput()
    async function handleSubmit(e){
        e.preventDefault()
        try{
            await addPro(projectName,projectDetais)
        }catch(err){
            console.log(err)
        }
    }
return(
    <>
    <h1>
        ADD PROJECT
    </h1>
    <form onSubmit={handleSubmit} >
<label>Project Name :</label><input placeholder="details" onChange={(e)=>setprojectName(e.target.value)} />
<label>Project Details :</label><input placeholder="details" onChange={(e)=>setProjectDetails(e.target.value)}/>
<button  type="submit">SUBMIT</button>
    </form>
    </>
)
}
export  default AddProject;
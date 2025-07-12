import { Children, createContext, useContext } from "react";
import { db } from "../firebase";
import { collection, setDoc ,addDoc,deleteDoc,doc, updateDoc} from "firebase/firestore";
import { useAuth } from "./authContext";
// import { doc } from "firebase/firestore/lite";
const AddProjectContext = createContext()

export const useInput =()=>  useContext(AddProjectContext)
export const AddInputProvider=({children})=>{
    const {currentUser} = useAuth()
const addPro = async (projectName,projectDetails)=>{
    if(!currentUser)  return
    try{await addDoc(collection(db,"projects"),{
        user:currentUser.email,
        projectName,
        projectDetails
    }) }catch(err){
        console.log(err)
    }
};
const  handleDelete = async(id)=>{
    try{
        await deleteDoc(doc(db,"projects",id))
    }catch(err){
        console.log(err)
    }
}
const handleEdit =async(id,newName,newDetails)=>{
    try{
await updateDoc(doc(db,"projects",id),{projectName:newName,projectDetails:newDetais})
    }catch(err){
        console.log(err)
    }
}
const value  ={
    addPro,handleDelete
}
return(   <AddProjectContext.Provider value={value}>{children}</AddProjectContext.Provider>)
  
}



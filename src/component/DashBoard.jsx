import AddProject from "./dashComponent/AddProject"
import NavBar from "./NavBar"
import { AddInputProvider } from "../context/AddProjectContext"
import Project from "./dashComponent/Project"
function DashBoard (){
 
return (
  <div>
    <NavBar/>
    <div>
<AddInputProvider> <AddProject/>
<Project/>
</AddInputProvider>
   
        
    </div>
  </div>
)
}

export default  DashBoard
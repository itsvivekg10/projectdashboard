import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { NavLink } from "react-router-dom"
function NavBar (){
const {currentUser,logOut}=useAuth()
const navigate = useNavigate()
console.log(currentUser)
async function signOut(){
    try{
logOut()
navigate("/login")
    }catch(err){
        console.log(err)

    }
}
return (
   <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Left side: Navigation links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </NavLink>
      </div>

      {/* Right side: User info & logout */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {currentUser && (
          <>
            <span style={{ color: "#666", fontSize: "14px" }}>
              Hello, {currentUser.email}
            </span>
            <button
              onClick={signOut}
              style={{
                padding: "6px 12px",
                backgroundColor: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              LOG OUT
            </button>
          </>
        )}
      </div>
    </nav>
)
}

export default  NavBar;
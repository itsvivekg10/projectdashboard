import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../../context/authContext";
import { useInput } from "../../context/AddProjectContext";

function Project() {
  const { currentUser } = useAuth();
  const [proList, setProList] = useState([]);
  const [loading, setLoading] = useState(true);
const {handleDelete} = useInput()
  async function getData() {
    if (!currentUser) return; // ✅ Wait for currentUser

    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const userProjects = data.filter(
        (project) => project.user === currentUser.email
      );

      setProList(userProjects);
      setLoading(false);
    } catch (err) {
      console.log("Error getting documents:", err);
    }
  }

  useEffect(() => {
    getData();
  }, [currentUser,handleDelete]); // ✅ Rerun when currentUser is loaded

  return (
    <>
      <h1>PROJECTS:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : proList.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {proList.map((project) => (
            <li key={project.id}>
              <strong>{project.projectName}</strong>: {project.projectDetails}
              <button>EDIT</button>
              <button onClick={()=>handleDelete(project.id) }>DELETE</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Project;

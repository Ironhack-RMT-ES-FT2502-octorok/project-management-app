import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask"; // for rendering Task Add Form
import TaskCard from "../components/TaskCard"; // for rendering Task List
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectDetailsPage () {

  const params = useParams()

  const [ project, setProject ] = useState(null)

  useEffect(() => {
    getData() // cuando el componente se cree, busca la data de la API
  }, [])

  const getData = async () => {
    try {
      
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}?_embed=tasks`)
      console.log(response)
      setProject(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  if (project === null) {
    return ( <h3>... buscando data</h3> )
  }
  
  return (
    <div className="ProjectDetailsPage">

      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      {/* ... list of all Tasks for this Project should be rendered here */}
      {project.tasks.map((eachTask) => {
        return (
          <TaskCard key={eachTask.id} eachTask={eachTask}/>
        )
      })}

      {/* ... form for adding a new Task should be rendered here    */}
      <AddTask projectId={project.id} getData={getData}/>

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      <Link to={`/projects/edit/${project.id}`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}

export default ProjectDetailsPage;

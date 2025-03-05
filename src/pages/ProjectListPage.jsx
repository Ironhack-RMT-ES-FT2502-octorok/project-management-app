import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"; // used to render each Project
import { useEffect, useState } from "react";
import axios from "axios";



function ProjectListPage() {

  const [allProjects, setAllProjects] = useState(null)

  useEffect(() => {

    // en vez de fetch() usamos axios porque es más avanzada y nos permite hacer más cosas con menos código.
    axios.get(`${import.meta.env.VITE_SERVER_URL}/projects`)
    .then((response) => {
      // console.log(response.data) // !IMPORTANTE. siempre al usar axios, la data de la API viene en la propiedad .data
      setAllProjects(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  if (allProjects === null) {
    return ( <h3>... buscando data</h3> )
  }

  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}

      {allProjects.map((eachProject) => {
        return (
          <ProjectCard key={eachProject.id} eachProject={eachProject}/>
        )
      })}
       
    </div>
  );
}

export default ProjectListPage;
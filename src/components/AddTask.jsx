
import axios from "axios";
import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // ...logic for creating a new Task should be here

    try {
      
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/tasks`, {
        title: title,
        description: description,
        projectId: props.projectId
      })
      console.log("todo bien, tarea creada")
      props.getData() // actualizamos info del proyecto en el estado despues de haber creado la nueva tarea

      // opcionalmente podriamos vacias los estados de los campos

    } catch (error) {
      console.log(error)
    }
    

    // ... the ID of the Project should be part of the Task data

  };
  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
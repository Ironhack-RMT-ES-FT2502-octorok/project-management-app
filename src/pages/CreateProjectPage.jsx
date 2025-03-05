import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//1. como llamamos a la API para crear. axios y url ""
//2. donde hacemos la llamada a la API. onClick de el boton para entregar
//3. como resolvemos la promesa de la API. then/catch
//4. que hacemos con el usuario luego de crear la data? podriamos mostrarle un mensaje. bloquear el boton. redirirlo a otro lugar.

function CreateProjectPage() {

  const navigate = useNavigate() //! RECUERDEN INVOCAR EL HOOK

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...logic for creating a new Project should be here

    axios.post(`${import.meta.env.VITE_SERVER_URL}/projects`, {
      title: title,
      description: description
    })
    .then(() => {
      // si el código llega a este punto, significa que el documento se crear
      navigate("/projects")
    })
    .catch((error) => {
      console.log(error)
    })

  };  

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;
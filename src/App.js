import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{api.get('repositories').then(response=>{console.log(response)})},[])
  
  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `repositorio id ${Date.now()}`,
      url: "Luiz",
      techs:"ReactJS"
    });

    const repository = response.data;
    setRepositories([...repositories, repository])
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete('repositories,{}')
  }

  return (
    <div>
      <header>
        <h1>
        {title}
        </h1>
      </header>
      <ul data-testid="repository-list">

        {repositories.map(repository =>
          <li key={repository.id}>

            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
          </button>
          </li>
        )}
      </ul>

      <button key={repository.id} onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;

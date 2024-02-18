import { useState } from "react";
import gitLogo from "../assets/github-logo.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";

import { Container } from "./styles";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState([]);
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if(data.id) {
      const isExit = repos.find(repo => repo.id == data.id);

      if(!isExit) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return
      }
    }
    
    alert("Repositório não encontrado");

  };

  const handleRemoveRepo = (id) => {
    let repoToRemoved = repos.filter((e) => e.id !== id);
    setRepos(repoToRemoved);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => 
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
      )}
    </Container>
  );
}

export default App;

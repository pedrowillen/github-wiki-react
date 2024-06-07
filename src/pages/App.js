import GitHubLogo from "../components/GithubLogo";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { api } from "../components/services/api";

import { Container } from './styles';
import { useState } from "react";

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }
    }
  }

  const RemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <GitHubLogo />
      <Input value={currentRepo} onChange={(event) => setCurrentRepo(event.target.value)}/>
      <Button onClick={handleSearch}/>
      {repos.map((repo) =>
        <ItemRepo repo={repo} onRemove={RemoveRepo} />)  
      }
    </Container>
  );
}

export default App;


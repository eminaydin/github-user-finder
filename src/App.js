
import React, { useState } from 'react';
import './App.css';
import { Input, Grid, } from 'semantic-ui-react';
import UserTable from './components/userInfoTable/UserTable';
import UserCard from './components/userCard/UserCard';
import Navbar from "./components/Navbar/Navbar"


function App() {
  const [input, setInput] = useState("");
  const baseUrl = `https://api.github.com/users/${input}`;
  const repoUrl = `https://api.github.com/users/${input}/repos`
  const [userData, setUserData] = useState("");
  const [repoData, setRepoData] = useState([]);
  const [searchDone, setSearchDone] = useState(false);

  function search(e) {

    if (e.key === "Enter") {
      setSearchDone(true)
      fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
          setUserData(data)
        }

        );
      fetch(repoUrl)
        .then(res =>
          res.json()

        )
        .then(data => {
          setRepoData(data)
        }
        )
      setInput("")
    }
  }
  console.log(repoData);

  return (
    <div className="app">
      <Input icon='users' iconPosition='left' placeholder='Search users...'
        onChange={e => { setInput(e.target.value) }}
        value={input}
        onKeyDown={search}
        className="input-field" />



      {searchDone ?
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <UserCard userData={userData} />
            </Grid.Column>
            <Grid.Column width={13}>
              <UserTable repoData={repoData} />
            </Grid.Column>
          </Grid.Row>
        </Grid>


        : <Navbar />}




    </div >
  );
}

export default App;

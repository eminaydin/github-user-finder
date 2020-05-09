
import React, { useState } from 'react';
import './App.css';
import { Input, Grid, } from 'semantic-ui-react';
import UserTable from './components/userInfoTable/UserTable';
import UserCard from './components/userCard/UserCard';
import Navbar from "./components/Navbar/Navbar"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
  const [input, setInput] = useState("");
  const baseUrl = `https://api.github.com/users/${input}`;
  const repoUrl = `https://api.github.com/users/${input}/repos`
  const [userData, setUserData] = useState("");
  const [repoData, setRepoData] = useState([]);
  const [searchDone, setSearchDone] = useState(false);
  const [loading, setLoading] = useState(false);

  function search(e) {


    if (e.key === "Enter") {
      setSearchDone(true)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setInput("")
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
      }, 1000);

    }
  }
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
              <UserCard userData={userData} loading={loading} />
            </Grid.Column>
            <Grid.Column width={13}>
              <UserTable repoData={repoData} loading={loading} />
            </Grid.Column>
          </Grid.Row>
        </Grid>


        : <Navbar />}
      {
        loading ? <div className="loading">
          <Loader type="Circles" color="#FFFFE0" height={80} width={80} />
        </div> : null
      }



    </div >
  );
}

export default App;

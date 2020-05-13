
import React, { useState } from 'react';
import './App.css';
import { Form, Segment } from 'semantic-ui-react';
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
  const [userUndefined, setUserUndefined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function search(e) {
    if (e.key === "Enter") {
      setLoading(true)
      setTimeout(() => {
        setInput("")
        fetch(baseUrl)
          .then(res => res.json())
          .then(data => {
            if (data.message) {
              setUserUndefined(true)
            } else {
              setUserData(data)
              setSearchDone(true)
              setUserUndefined(false)
            }
          }

          );
        fetch(repoUrl)
          .then(res =>
            res.json()

          )
          .then(data => {
            if (data.message) {
              setUserUndefined(true)
            } else {
              setRepoData(data)
              setUserUndefined(false)
            }
            setLoading(false)
          }
          )

      }, 1000);
    }
  }
  function loadingIcon(param) {
    if (param === true) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }
  console.log(isLoading);


  return (

    <div className="app">
      {isLoading &&
        <div className="loading">
          <Loader type="Circles" color="#FFFFE0" height={80} width={80} />
        </div>}
      <Form.Input icon='users' iconPosition='left' placeholder='Search users...'
        onChange={e => { setInput(e.target.value) }}
        value={input}
        onKeyDown={search}
        className="input-field"
        fluid
        {...userUndefined && { error: { content: "Username doesn't exist" } }}
      />
      {searchDone ?
        <>
          <Segment>
            <UserCard userData={userData} loading={loading} />

          </Segment>
          <Segment>
            <UserTable repoData={repoData} loading={loading} />
          </Segment>
        </>
        : <Navbar setUserUndefined={setUserUndefined} parentFunc={loadingIcon} />

      }

      {
        loading ? <div className="loading">
          <Loader type="Circles" color="#FFFFE0" height={80} width={80} />
        </div> : null
      }





    </div >

  );
}

export default App;

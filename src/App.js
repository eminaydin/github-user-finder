
import React, { useState } from 'react';
import './App.css';
import { Form, Segment, Header, Icon } from 'semantic-ui-react';
import Navbar from "./components/Navbar/Navbar"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
  const [input, setInput] = useState("");
  const baseUrl = `https://api.github.com/users/${input}`;
  const repoUrl = `https://api.github.com/users/${input}/repos`
  const [userData, setUserData] = useState("");
  const [repos, setRepos] = useState([]);
  const [searchDone, setSearchDone] = useState(false);
  const [userUndefined, setUserUndefined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const repoData = [...repos]

  function search(e) {
    if (e.key === "Enter") {
      setIsLoading(true)
      setTimeout(() => {
        setUserName(input)
        setInput("")
        fetch(baseUrl)
          .then(res => res.json())
          .then(data => {
            if (data.message) {
              setUserUndefined(true)
              setIsLoading(false)
            } else {
              setIsLoading(false)
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
              setIsLoading(false)
              setRepos(data)
              setUserUndefined(false)
            }

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



  return (

    <div className="app">
      <Router>
        {isLoading &&
          <div className="loading">
            <Loader type="Circles" color="#008080" height={80} width={80} />
          </div>}

        <Form.Input
          icon='users'
          iconPosition='left'
          placeholder='Search users...'
          onChange={e => { setInput(e.target.value) }}
          value={input}
          onKeyDown={search}
          className="input-field"
          fluid
          {...userUndefined && { error: { content: "Username doesn't exist" } }}
        />



        <Switch>

          {searchDone && <Route path={`/${input}`} render={(props) => <Main {...props} userName={userName} repos={repos} repoData={repoData} userData={userData} loading={isLoading} />} />}


          <Route exact path="/" render={() => <Navbar setUserUndefined={setUserUndefined} parentFunc={loadingIcon} />} />
        </Switch>





      </Router>
    </div >

  );
}

export default App;

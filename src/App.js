import React, { useState } from "react";
import "./App.css";
import { Form } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./components/Main";

function App() {
  const [input, setInput] = useState("");
  const baseUrl = `https://api.github.com/users/${input}`;
  const repoUrl = `https://api.github.com/users/${input}/repos`;
  const [userData, setUserData] = useState("");
  const [repos, setRepos] = useState([]);
  const [userUndefined, setUserUndefined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const repoData = [...repos];

  function search(e) {
    if (e.key === "Enter") {
      setIsLoading(true);
      setTimeout(() => {
        setUserName(input);
        setInput("");
        fetch(baseUrl)
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false);
            if (data.message) {
              setUserUndefined(true);
            } else {
              setUserData(data);
            }
          });
        fetch(repoUrl)
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              setUserUndefined(true);
            } else {
              setIsLoading(false);
              setRepos(data);
              setUserUndefined(false);
            }
          });
      }, 1000);
    }
  }

  return (
    <div className="app">
      <Router>
        {userName && <Redirect to={`/repositories/${userName}`} />}
        {isLoading && (
          <div className="loading">
            <Loader type="Circles" color="#008080" height={80} width={80} />
          </div>
        )}

        <Form.Input
          icon="users"
          iconPosition="left"
          placeholder="Search users..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          onKeyDown={search}
          className="input-field"
          fluid
          {...(userUndefined && {
            error: { content: "Username doesn't exist" },
          })}
        />

        <Switch>
          {!userUndefined ? (
            <Route
              path={`/repositories/${userName}`}
              render={(props) => (
                <Main
                  {...props}
                  userName={userName}
                  repos={repos}
                  repoData={repoData}
                  userData={userData}
                  loading={isLoading}
                />
              )}
            />
          ) : null}
          <Route exact path="/" render={() => <Navbar />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

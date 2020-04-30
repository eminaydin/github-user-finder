import React, { useState, useEffect } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Card, Icon, Image, Input, Button } from 'semantic-ui-react';


function App() {

  const [userName, setuserName] = useState("");
  const [name, setName] = useState("");
  const [follower, setFollower] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");
  const baseUrl = `https://api.github.com/users/${input}`;
  const [userdata, setUserdata] = useState("");

  function search(e) {
    if (e.key === "Enter") {
      fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
          setUserdata(data)
        }

        )
      console.log(userdata);

      console.log(baseUrl);
      console.log(input);
      setInput("")
    }
  }

  return (
    <div className="app">

      <Input icon='users' iconPosition='left' placeholder='Search users...'
        onChange={e => { setInput(e.target.value) }}
        value={input}
        onKeyDown={search} />
      <Card>
        <Image src={userdata.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{userdata.location}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {userdata.followers}
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
        22 Friends
      </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;

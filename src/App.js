import _ from 'lodash'
import React, { useState } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Card, Icon, Image, Input, Table } from 'semantic-ui-react';
import Moment from 'react-moment';

function App() {
  const [input, setInput] = useState("");
  const baseUrl = `https://api.github.com/users/${input}`;
  const [userdata, setUserdata] = useState("");
  const [column, setcolumn] = useState(null);
  const tableData = [
    { name: 'John', age: 15, gender: 'Male' },
    { name: 'Amber', age: 40, gender: 'Female' },
    { name: 'Leslie', age: 25, gender: 'Other' },
    { name: 'Ben', age: 70, gender: 'Male' },
  ]
  const [data, setdata] = useState(tableData);
  const [direction, setdirection] = useState(null);

  const handleSort = (clickedColumn) => () => {

    if (column !== clickedColumn) {

      setcolumn(clickedColumn)
      setdata(_.sortBy(data, [clickedColumn]))
      setdirection('ascending')


      return
    }
    setdata(data.reverse())
    setdirection(direction === 'ascending' ? 'descending' : 'ascending')

  }



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
      <div className="form">
        <Input icon='users' iconPosition='left' placeholder='Search users...'
          onChange={e => { setInput(e.target.value) }}
          value={input}
          onKeyDown={search} />
      </div>
      <Card className="ui-card">
        <Image src={userdata.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{userdata.login}</Card.Header>
          <Card.Header>{userdata.location}</Card.Header>
          <Card.Meta>
            <span className='date'> Member since: <Moment format="DD-MM-YYYY">
              {userdata.created_at}
            </Moment></span>
          </Card.Meta>
          <Card.Description>
            {userdata.bio}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

          <a>
            <Icon name='user' />
            {userdata.followers} Followers
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {userdata.followers} Following
      </a>
        </Card.Content>
      </Card>
      <div className="table">

        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'name' ? direction : null}
                onClick={handleSort('name')}
              >
                Name
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'age' ? direction : null}
                onClick={handleSort('age')}
              >
                Age
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'gender' ? direction : null}
                onClick={handleSort('gender')}
              >
                Gender
            </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>

            <Table.Row key={""}>
              <Table.Cell>{userdata.login}</Table.Cell>
              <Table.Cell>{""}</Table.Cell>
              <Table.Cell>{""}</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default App;

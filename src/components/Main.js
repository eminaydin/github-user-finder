import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import UserTable from './UserTable';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

const Main = ({ repoData, isLoading, userData, repos, }) => {

  return (
    <div>
      <Header as='h2'>
        <Link to="/" > <Icon name='angle double left' /></Link>
        <Header.Content>User Details</Header.Content>
      </Header>
      <Segment compact style={{ backgroundColor: "inherit", margin: "0 auto" }}>

        <UserCard userData={userData} loading={isLoading} />
      </Segment>
      <Segment>
        {repoData && repoData.length ? <UserTable repoData={repos} loading={isLoading} /> : null}
      </Segment>
    </div>
  );
}

export default Main;

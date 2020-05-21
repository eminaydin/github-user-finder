import React, { useEffect } from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import UserTable from '../userInfoTable/UserTable';
import UserCard from '../userCard/UserCard';
import { useHistory } from 'react-router-dom';

const Main = ({ repoData, isLoading, userData, repos, history, userName }) => {

  useEffect(() => {
    history.replace(`/${userName}`)
  }, []);


  function handle() {
    history.goBack();
  }


  return (
    <div>
      <Header as='h2'>
        <Icon name='angle double left' onClick={handle} />
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

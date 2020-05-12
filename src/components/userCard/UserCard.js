import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Moment from 'react-moment';

const UserCard = (props) => {

    return (
        <Card className="ui-card">
            <Image src={props.userData.avatar_url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.userData.login}</Card.Header>
                <Card.Meta>
                    Member since: <Moment format="DD-MM-YYYY">
                        {props.userData.created_at}
                    </Moment>
                </Card.Meta>
                <Card.Description>
                    {props.userData.bio}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>

                <a href=" ">
                    <Icon name='user' />
                    {props.userData.followers} Followers
  </a>
            </Card.Content>
            <Card.Content extra>
                <a href=" ">
                    <Icon name='user' />
                    {props.userData.followers} Following
</a>
            </Card.Content>

        </Card>

    );
}

export default UserCard;

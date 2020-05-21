import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';

const UserCard = ({ userData }) => {


    return (
        <div className="user-card">
            <Card centered>
                <Image src={userData.avatar_url} size="medium" wrapped ui={false} />
                <Card.Content extra>
                    <a>
                        <Icon name='user circle' />
                        {userData.login}
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {userData.followers} Followers
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user secret' />
                        {userData.following} Following
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='time' />
                        <Moment format="DD-MM-YYYY"> {userData.created_at} </Moment>
                    </a>
                </Card.Content>
            </Card>

        </div>

    );
}

export default UserCard;

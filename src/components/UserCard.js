import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';

const UserCard = ({ userData }) => {
    const formattedDate = userData.created_at;

    return (
        <div className="user-card">
            <Card centered>
                <Image src={userData.avatar_url} size="medium" wrapped ui={false} />
                <Card.Content extra>
                    <a href="#">
                        <Icon name='user circle' />
                        {userData.login}
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a href="#">
                        <Icon name='user' />
                        {userData.followers} Followers
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a href="#">
                        <Icon name='user secret' />
                        {userData.following} Following
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a href="#">
                        <Icon name='time' />Member since:
                        <Moment format="DD-MM-YYYY">
                            {formattedDate}
                        </Moment>
                    </a>
                </Card.Content>
            </Card>

        </div>

    );
}

export default UserCard;

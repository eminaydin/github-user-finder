import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';

const UserCard = (props) => {
    console.log(props.userData);

    return (
        <div className="user-card">
            <Card centered>
                <Image src={props.userData.avatar_url} size="medium" wrapped ui={false} />
                <Card.Content extra>
                    <a>
                        <Icon name='user circle' />
                        {props.userData.login}
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {props.userData.followers} Followers
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user secret' />
                        {props.userData.following} Following
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='time' />
                        <Moment format="DD-MM-YYYY"> {props.userData.created_at} </Moment>
                    </a>
                </Card.Content>
            </Card>

        </div>

    );
}

export default UserCard;

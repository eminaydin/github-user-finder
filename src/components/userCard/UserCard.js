import React from 'react';
import { List, Image } from 'semantic-ui-react';
import Moment from 'react-moment';

const UserCard = (props) => {

    return (
        <div className="user-card">
            <Image src={props.userData.avatar_url} size="medium" />
            <List divided style={{ margin: "auto" }}>
                <h2>{props.userData.login}</h2>
                <List.Item icon='users' content={`${props.userData.followers} Followers`} />
                <List.Item icon='users' content={`${props.userData.following} Following`} />
                <List.Item icon='marker' content={`${props.userData.location}`} />
                <List.Item icon='users' content={`Member since: 
                    ${<Moment format="DD-MM-YYYY"> props.userData.created_at </Moment>}
                    `} />
            </List>
        </div>

    );
}

export default UserCard;

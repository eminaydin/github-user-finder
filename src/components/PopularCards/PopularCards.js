import React from 'react';
import { Button, Card, Image, CardGroup } from 'semantic-ui-react'
import Moment from 'react-moment';

const PopularCards = (props) => {


    return (
        <CardGroup>
            {props.popularRepos.items.map(e => {
                return (
                    <Card key={e.id}>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src={e.owner.avatar_url}
                            />
                            <Card.Header>{e.name}</Card.Header>
                            <Card.Meta>
                                <Moment format="DD-MM-YYYY">
                                    {e.created_at}
                                </Moment>
                            </Card.Meta>
                            <Card.Description>
                                {e.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button.Group>
                                <Button target="_blank" href={e.homepage}>Official Website</Button>
                                <Button.Or />
                                <Button color="teal" target="_blank" href={e.html_url}> Github Profile</Button>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                )
            })}


        </CardGroup>
    );
}

export default PopularCards;

import React from "react";
import { Button, Card, Image, CardGroup } from "semantic-ui-react";
import Moment from "react-moment";

const PopularCards = ({ popularRepos }) => {
  return (
    <CardGroup>
      {popularRepos.items.map(
        ({ id, owner, name, created_at, description, html_url, homepage }) => {
          return (
            <Card key={id}>
              <Card.Content>
                <Image floated="right" size="mini" src={owner.avatar_url} />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  <Moment format="DD-MM-YYYY">{created_at}</Moment>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button.Group>
                  <Button target="_blank" href={homepage}>
                    Official Website
                  </Button>
                  <Button.Or />
                  <Button color="teal" target="_blank" href={html_url}>
                    {" "}
                    Github Profile
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>
          );
        }
      )}
    </CardGroup>
  );
};

export default PopularCards;

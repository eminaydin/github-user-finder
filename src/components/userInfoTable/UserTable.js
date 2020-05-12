import React from 'react';
import { Table } from 'semantic-ui-react';
import Moment from 'react-moment';


const UserTable = (props) => {

    return (
        <div>
            <Table sortable celled fixed selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell

                        >
                            Repository Name
            </Table.HeaderCell>
                        <Table.HeaderCell
                        >
                            Description
            </Table.HeaderCell>
                        <Table.HeaderCell

                        >
                            Created At
            </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {props.repoData.map(repos => {
                        return <Table.Row>

                            <Table.Cell>{repos.name}</Table.Cell>
                            <Table.Cell>{repos.description}</Table.Cell>
                            <Table.Cell> <Moment format="DD-MM-YYYY">{repos.created_at}</Moment></Table.Cell>
                        </Table.Row>
                    })}


                </Table.Body>
            </Table>

        </div>
    );
}

export default UserTable;

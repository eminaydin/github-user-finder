import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';
import Moment from 'react-moment';
const UserTable = ({ repoData }) => {
    const [userData, setUserData] = useState(repoData);



    return (
        <div >
            <Table sortable celled fixed>
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
                </Table.Header >
                <Table.Body>
                    {userData.map(repos => {
                        return <Table.Row>

                            <Table.Cell>{repos.name}</Table.Cell>
                            <Table.Cell>{repos.description}</Table.Cell>
                            <Table.Cell> <Moment fromNow>{repos.created_at}</Moment></Table.Cell>
                        </Table.Row>
                    })}


                </Table.Body>
            </Table>
        </div>
    );
}

export default UserTable;

import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import Moment from 'react-moment';
import _ from 'lodash'

const UserTable = ({ repoData }) => {
    const [initialObject, setInitialObject] = useState({
        column: null,
        data: repoData,
        direction: null
    });
    useEffect(() => {
        setInitialObject({ data: repoData })
    }, [repoData]);


    const handleSort = (clickedColumn) => {
        if (initialObject.column !== clickedColumn) {
            setInitialObject({
                column: clickedColumn,
                data: _.sortBy(initialObject.data, [clickedColumn]),
                direction: "ascending"
            })
            return
        }
        setInitialObject({
            data: initialObject.data.reverse(),
            direction: initialObject.direction === "ascending" ? "descending" : "ascending",
        })
    }

    return (
        <div >
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={initialObject.column === 'name' ? initialObject.direction : null}
                            onClick={() => handleSort('name')}
                        >
                            Repository Name
        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={initialObject.column === 'description' ? initialObject.direction : null}
                            onClick={() => handleSort('description')}
                        >
                            Description
        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={initialObject.column === 'created_at' ? initialObject.direction : null}
                            onClick={() => handleSort('created_at')}>
                            Created At
        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header >
                <Table.Body>
                    {initialObject.data.map(repos => {
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

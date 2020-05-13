import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';
import Moment from 'react-moment';
import _ from "lodash";

const UserTable = (props) => {
    const [state, setState] = useState({
        column: null,
        data: null,
        direction: null,
    });
    const { column, data, direction } = state;
    const handleSort = (clickedColumn) => () => {
        if (column !== clickedColumn) {
            setState({
                data: _.sortBy(data, [clickedColumn]),
                column: clickedColumn,
                direction: "ascending",
            });
            return;
        }
        setState({
            data: props.repoData.reverse(),
            column: clickedColumn,
            direction: direction === "ascending" ? "descending" : "ascending",
        });

    };
    return (
        <div>
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={handleSort('name')}
                        >
                            Repository Name
        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'description' ? direction : null}
                            onClick={handleSort('description')}
                        >
                            Description
        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'since' ? direction : null}
                            onClick={handleSort('since')}
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

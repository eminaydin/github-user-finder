import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash'
import Moment from 'react-moment';

const UserTable = (props) => {
    const [column, setColumn] = useState(null);
    const [data, setData] = useState();
    const [direction, setDirection] = useState(null);



    const handleSort = (clickedColumn) => () => {

        if (column !== clickedColumn) {

            setColumn(clickedColumn)
            setData(_.sortBy(data, [clickedColumn]))
            setDirection('ascending')
            return
        }
        setData(props.repoData.reverse())
        setDirection(direction === 'ascending' ? 'descending' : 'ascending')
    }



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
                            sorted={column === 'age' ? direction : null}
                            onClick={handleSort('age')}
                        >
                            Description
            </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'gender' ? direction : null}
                            onClick={handleSort('gender')}
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

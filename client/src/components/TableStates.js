import React, { Component } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow, Typography } from '@material-ui/core/';

export default class TableStates extends Component {
    render() {
        return (
            <div style={{width: '70%',display: 'flex',flexDirection: 'column', maxWidth:1200,margin:'70px auto' }} >
                <Typography variant="h5">States</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Code</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Inherited Code</TableCell>
                            <TableCell>Inherited Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((state, key) =>
                            <TableRow key={key}>
                                <TableCell >{state[1][0] || '-'}</TableCell>
                                <TableCell >{state[1][1] || '-'}</TableCell>
                                <TableCell >{state[0][0] || '-'}</TableCell>
                                <TableCell >{state[0][1] || '-'}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
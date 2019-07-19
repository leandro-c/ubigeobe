import React, { Component } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow, Typography } from '@material-ui/core/';

export default class TableDepartment extends Component {
    render() {
        return (
            <div style={{width: '70%',display: 'flex',flexDirection: 'column', maxWidth:1200,margin:'70px auto' }} >
                <Typography variant="h5">Department</Typography>
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
                        {this.props.data.map((departament, key) =>
                            <TableRow key={key}>
                                <TableCell >{departament[0] || '-'}</TableCell>
                                <TableCell >{departament[1] || '-'}</TableCell>
                                <TableCell >{departament[2] || '-'}</TableCell>
                                <TableCell >{departament[3] || '-'}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
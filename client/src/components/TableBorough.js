import React, { Component } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow, Typography } from '@material-ui/core/';

export default class TableBorough extends Component {
    render() {
        return (
            <div style={{width: '70%',display: 'flex',flexDirection: 'column', maxWidth:1200,margin:'70px auto' }}  >
                <Typography variant="h5">Borough</Typography>
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
                        {this.props.data.map((borough, key) =>
                            <TableRow key={key}>
                                <TableCell >{borough[1][0] || '-'}</TableCell>
                                <TableCell >{borough[1][1] || '-'}</TableCell>
                                <TableCell >{borough[0][0] || '-'}</TableCell>
                                <TableCell >{borough[0][1] || '-'}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
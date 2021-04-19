import {
    TableBody,
    Table,
    TableCell,
    TableRow,
    TableHead,
    Paper,
    TableContainer,
} from "@material-ui/core";
import { useState} from 'react'
import {Options} from '../components/sub-components/Buttons'
import {EditField} from '../components/sub-components/CustomTextField'

const Header = ({columns}) => {
    return (

        <TableHead>
            <TableRow>
                {columns.map((column,index) => (
                    <TableCell
                        key={index}
                        align="center"
                    >
                        {column}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>

    )
}

const Body = ({rows,columns, options}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rIndex) => {
                return (
                    <TableRow key={rIndex} hover role="checkbox" tabIndex={-1} >
                        {columns.map((column,index) => {
                            if (column === options.name) {
                                return (
                                    <TableCell key={index} align="center">
                                        <div style={{ display: 'flex',justifyContent:'center' }}>
                                            {options.component(rIndex)}
                                        </div>
                                    </TableCell>
                                )
                            }
                            const value = row[index];
                            return (
                                <TableCell key={column.id} align="center">
                                    <EditField id={rIndex} value={value} />
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableBody>
    )
}


export default function CustomTable({rows, columns, options}) {
    return (
        <>
                <Paper>
                    <TableContainer>
                        <Table>
                            <Header columns={columns}/>
                            <Body columns={columns} options={options} rows={rows}/>
                        </Table>
                    </TableContainer>
                </Paper>

        </>
    )
}
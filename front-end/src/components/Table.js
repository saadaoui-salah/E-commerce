import {
    TableBody,
    Table,
    TableCell,
    TableRow,
    TableHead,
    Paper,
    TableContainer,
    TablePagination
} from "@material-ui/core";
import { useState } from 'react'
import { EditField } from './sub-components/CustomTextField'
import { SearchField } from './sub-components/CustomTextField'


const Header = ({ columns }) => {
    return (

        <TableHead>
            <TableRow>
                {columns.map((column, index) => (
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

const Body = (props) => {

    return (
        <>
            <TableBody>
                {props.rows.slice(
                    props.page * props.rowsPerPage,
                    props.page * props.rowsPerPage + props.rowsPerPage
                ).map((row, rIndex) => {
                    return (
                        <TableRow key={rIndex} hover role="checkbox" tabIndex={-1} >
                            {props.columns.map((column, index) => {
                                const value = row[index];
                                if (props.options) {
                                    if (column === props.options.name) {
                                        return (
                                            <TableCell key={index} align="center">
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    {props.options.component(rIndex)}
                                                </div>
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell key={column.id} align="center">
                                            <EditField id={rIndex} value={value} />
                                        </TableCell>
                                    );
                                }
                                return (
                                    <TableCell key={column.id} align="center">
                                        {value}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    );
                })}

            </TableBody>
        </>
    )
}


export default function CustomTable({ rows, columns, options, children }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Paper>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        {children}
                    </div>
                    <div style={{width: '280px'}}>
                        <SearchField />
                    </div>
                </div>
                <TableContainer>
                    <Table>
                        <Header columns={columns} />
                        <Body
                            page={page}
                            rowsPerPage={rowsPerPage}
                            columns={columns}
                            options={
                                options ? options : false
                            }
                            rows={rows} />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}
import {
    TableBody,
    Table,
    TableCell,
    TableRow,
    TableHead,
    Paper,
    TableContainer,
    TablePagination,
    Typography
} from "@material-ui/core";
import { useState } from 'react'
import { SearchField } from './sub-components/CustomTextField'
import { ArrowIconButton } from './sub-components/Buttons'

const Header = ({ columns }) => {
    return (

        <TableHead>
            <TableRow>
                {columns.map((column, index) => (
                    <TableCell
                        key={index}
                        align="center"
                    >
                        <Typography style={{color: "#fff"}}>{column}</Typography>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>

    )
}

const DropDown = ({ DropDown }) => {
    if (DropDown) {
        return (
            <TableCell>
                <ArrowIconButton />
            </TableCell>
        )
    }
    return null
}

const Body = (props) => {
    const [select, setSelect] = useState([])
    const handleSelect = (id) => {
        if (id in select) {
            const new_select = select.filter(id_ => id_ != id)
            setSelect(new_select)
        } else {
            setSelect([...select, id])
        }
    }
    if (props.rows) {
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
                                        if (column === props.options.name) {
                                            return (
                                                <TableCell key={index} align="center">
                                                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        {props.options.component(rIndex)}
                                                    </div>
                                                </TableCell>
                                            )
                                        }
                                        return (
                                            <TableCell key={column.id} align="center">
                                                <Typography style={{color: "#fff"}}>
                                                    {value}
                                                </Typography>
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                        );
                    })}
                </TableBody>
            </>
        )
    } else {
        return <div></div>
    }
}


export default function CustomTable({ rows, columns, options, children, dropDown }) {
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
            <Paper style={{backgroundColor:"#101b38", textColor:"#fff"}}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ margin: '10px' }}>
                        {children}
                    </div>
                    <div style={{ width: '280px', margin: '10px' }}>
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
                            dropDown={dropDown}
                            rows={rows} />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    component="div"
                    style={{color:"#fff"}}
                    count={rows ? rows.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}
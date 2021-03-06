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
import { useState, useRef, useEffect, useContext } from 'react'
import { SearchField } from './sub-components/CustomTextField'
import { ArrowIconButton } from './sub-components/Buttons'
import { DarkContext } from "../reducers/context";

const Header = ({ columns }) => {
    const { state } = useContext(DarkContext)
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {columns.map((column, index) => (
                    <TableCell
                        key={index}
                        align="center"
                    >
                        <Typography style={{ color: state ? "#fff" : "#25265e" }}>{column}</Typography>
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
    const { state } = useContext(DarkContext)
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
                            <TableRow selected key={rIndex} hover role="checkbox" tabIndex={-1} >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        indeterminate={numSelected > 0 && numSelected < rowCount}
                                        checked={rowCount > 0 && numSelected === rowCount}
                                        onChange={onSelectAllClick}
                                        inputProps={{ 'aria-label': 'select all desserts' }}
                                    />
                                </TableCell>
                                {props.columns.map((column, index) => {
                                    const value = row[index];
                                    return (
                                        <TableCell key={column.id} align="center">
                                            <Typography style={{ color: state ? "#fff" : "#25265eb3" }}>
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
    const { state } = useContext(DarkContext)
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const searchInput = useRef()
    useEffect(() => {
        searchInput.current.focus()
    }, [searchInput.value])
    function search() {
        if (searchInput.current.value !== "") {
            return rows.filter(row => row === searchInput.current.value)
        }
        return rows
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Paper
                elevation={1}
                style={{
                    backgroundColor: state ? "#101b38" : "#fff",

                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ margin: '10px' }}>
                        {children}
                    </div>
                    <div style={{ width: '280px', margin: '10px' }}>
                        <SearchField onChange={search} textRef={searchInput} />
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
                    style={{ color: state ? "#fff" : "#25265eb3" }}
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
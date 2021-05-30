import Table from '../../components/Table'
import { Grid } from '@material-ui/core'
import { TableOptions } from '../../components/sub-components/Buttons'

const columns = ["ID", "User", "Date", "Total Price", "Status"];
function createData(id, user, date, total_price, status) {
    return [id, user, date, total_price, status];
}

const rows = [
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
    createData('India', "user", '2020/02/03', 1324171354, "Done"),
];

export default function Orders() {
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    return (
        <>
            <Grid
                container
                justify="flex-end"
            >
            </Grid>
            <Table columns={columns} rows={rows} options={options_} />
        </>
    )
}
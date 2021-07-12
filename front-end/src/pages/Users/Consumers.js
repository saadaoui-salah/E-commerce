import Table from '../../components/Table'
import { TableOptions } from '../../components/sub-components/Buttons'

const columns = ["username", "Total Orders", "Total expenses", "Country"];
function createData(username, total_orders, total_expense, country) {
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
    createData('India', 'IN', 1324171354, 3287263, "user"),
];



export default function Users() {

    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    return (
                <Table columns={columns} rows={rows} options={options_} />
    )
}
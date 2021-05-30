import Table from '../../components/Table'
import { TableOptions } from '../../components/sub-components/Buttons'
import { SelectField } from '../../components/sub-components/CustomTextField'
const columns = ["username", "Total Orders", "Country", "Confirmed", "Days Left to Pay"];



function createData(username, total_orders, total_expense, country, days) {
    return [username, total_orders, total_expense, country, days];
}

const choices = [
    {
        name: "Confirmed",
        value: "CONFIRMED",
        color: "#00e676"
    },
    {
        name: "Waiting",
        value: "WAITING",
        color: "#ff9100"
    },
    {
        name: "Not Paid",
        value: "NOT_PAID",
        color: "#f44336"
    },
]


const rows = [
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
    createData('India', 'IN', 1324171354, <SelectField choices={choices} default={choices[0]} />, "user"),
];


export default function Users() {

    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    return (
        <>
            <SelectField choices={choices} default={"CONFIRMED"} />
            <Table columns={columns} rows={rows} options={options_} />
        </>
    )
}
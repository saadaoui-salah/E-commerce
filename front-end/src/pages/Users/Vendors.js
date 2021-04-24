import Table from '../../components/Table'
import { TableOptions } from '../../components/sub-components/Buttons'
import { OptionsReducer } from '../../reducers/reducers'
import {useReducer } from 'react'
import {OptionsStateContext, OptionsDispatchContext} from '../../reducers/context'

const columns = ["username", "Total Orders", "Country", "Confirmed", "Days Left to Pay"];

function createData(username, total_orders, total_expense, country, days) {
    return [username, total_orders, total_expense, country, days];
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

    const [options, dispatch] = useReducer(OptionsReducer)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    return (
        <OptionsStateContext.Provider value={options}>
            <OptionsDispatchContext.Provider value={dispatch}>
                <Table columns={columns} rows={rows} options={options_} />
            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >
    )
}
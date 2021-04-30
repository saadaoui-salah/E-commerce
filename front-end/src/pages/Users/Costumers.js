import Table from '../../components/Table'
import { TableOptions } from '../../components/sub-components/Buttons'
import { OptionsReducer } from '../../reducers/reducers'
import { options } from '../../reducers/state'
import {useReducer } from 'react'
import {OptionsStateContext, OptionsDispatchContext} from '../../reducers/context'

const columns = ["username", "Total Orders", "Total expenses", "Country"];
function createData(username, total_orders, total_expense, country) {
    return [username, total_orders, total_expense, country];
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

    const [state, dispatch] = useReducer(OptionsReducer, options)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    return (
        <OptionsStateContext.Provider value={state}>
            <OptionsDispatchContext.Provider value={dispatch}>
                <Table columns={columns} rows={rows} options={options_} />
            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >
    )
}
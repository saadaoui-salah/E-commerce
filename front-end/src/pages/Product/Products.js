import Table from '../../components/Table'
import { AddButton, TableOptions } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { Grid } from '@material-ui/core'
import { OptionsReducer } from '../../reducers/reducers'
import { initialState } from '../../reducers/state'
import { useReducer } from 'react'
import { OptionsStateContext, OptionsDispatchContext } from '../../reducers/context'

const columns = ["Image", "Product", "Category", "Quantity", "User"];
function createData(image, product, category, quantity, bPrice, vPrice, user) {
    const benifits = vPrice - bPrice;
    return [image, product, category, quantity, bPrice, vPrice, user, benifits];
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



export default function Products() {

    const [options, dispatch] = useReducer(OptionsReducer, initialState.options)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    return (
        <OptionsStateContext.Provider value={options}>
            <OptionsDispatchContext.Provider value={dispatch}>
                <Table columns={columns} rows={rows} options={options_}>
                    <AddButton value="Product" content={<ProductFrom />} title="Create New Product" />
                </Table>
            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >
    )
}
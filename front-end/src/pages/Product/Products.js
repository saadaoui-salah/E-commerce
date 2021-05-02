import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { OptionsStateContext, OptionsDispatchContext } from '../../reducers/context'
import { OptionsReducer} from '../../reducers/reducers'
import { options} from '../../reducers/state'
import {useEffect, useReducer} from 'react'
import {useQuery} from '@apollo/client'
import {LOAD_PRODUCTS} from '../../graphql/queries'
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
    const [optionsState, optionsDispatch] = useReducer(OptionsReducer, options)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const {error, loading, data} = useQuery(LOAD_PRODUCTS)
    useEffect(()=>{
        console.log(data)
    },[data])
    return (
        <OptionsStateContext.Provider value={optionsState}>
            <OptionsDispatchContext.Provider value={optionsDispatch}>
                <Table columns={columns} rows={rows} options={options_} dropDown={true}>
                    
                    <AddButton value="Product" content={<ProductFrom />} title="Create New Product" />
                    <DeleteButton content="Are you sure" title="Delete Product" />
                </Table>
            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >
    )
}
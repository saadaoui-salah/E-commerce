import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import {
    OptionsStateContext,
    ProductStateContext,
    OptionsDispatchContext,
    ProductDispatchContext
} from '../../reducers/context'
import {
    OptionsReducer,
    productReducer,
} from '../../reducers/reducers'
import { options, products } from '../../reducers/state'
import { useEffect, useReducer, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_PRODUCTS } from '../../graphql/queries'


const columns = ["Image", "Product", "Category", "Quantity", "Price", "Benifits"];
function createData(image, product, category, quantity, bPrice, vPrice) {
    const benifits = vPrice - bPrice;
    return [image, product, category, quantity, vPrice, benifits];
}


export default function Products() {

    const [productState, productDispatch] = useReducer(productReducer, products)
    const [optionsState, optionsDispatch] = useReducer(OptionsReducer, options)
    const productsState = useContext(ProductStateContext)
    const productsDispatch = useContext(ProductDispatchContext)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const { error, loading, data } = useQuery(LOAD_PRODUCTS)
    useEffect(()=>{
        if(!loading){
            data.getProducts.map(product=>{
                productsDispatch(product)
            })
        }
    }
    ,[data])
    const rows = productsState
    console.log('rows',rows)
    return (
        <OptionsStateContext.Provider value={optionsState}>
            <ProductStateContext.Provider value={productState}>
                <OptionsDispatchContext.Provider value={optionsDispatch}>
                    <ProductDispatchContext.Provider value={productDispatch}>
                        <Table columns={columns} rows={rows} options={options_}>

                            <AddButton value="Product" content={<ProductFrom />} title="Create New Product" />
                            <DeleteButton content="Are you sure" title="Delete Product" />
                        </Table>
                    </ProductDispatchContext.Provider >
                </OptionsDispatchContext.Provider>
            </ProductStateContext.Provider >
        </OptionsStateContext.Provider >
    )
}
import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import {
    ProductStateContext,
    ProductDispatchContext
} from '../../reducers/context'
import {
    productReducer,
} from '../../reducers/reducers'
import { products } from '../../reducers/state'
import { useEffect, useReducer, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { addProduct } from '../../reducers/actoins'
import { LOAD_PRODUCTS } from '../../graphql/queries'


const columns = ["Image", "Product", "Category", "Quantity", "Price", "Benifits"];
function createData(image, product, category, quantity, bPrice, vPrice) {
    const benifits = vPrice - bPrice;
    return [image, product, category, quantity, vPrice, benifits];
}



export default function Products() {

    const [productState, productDispatch] = useReducer(productReducer, products)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const { error, loading, data } = useQuery(LOAD_PRODUCTS)
    console.log(error)
    console.log(productState)
    useEffect(()=>{
        if(!loading){
            console.log(data.getProducts)
            data.getProducts.map(product=>{
                productDispatch(addProduct(product))
            })
        }
    }
    ,[loading])
    const rows = productState
    return (
            <ProductStateContext.Provider value={productState}>
                    <ProductDispatchContext.Provider value={productDispatch}>
                        <Table columns={columns} rows={rows} options={options_}>

                            <AddButton value="Product" content={<ProductFrom />} title="Create New Product" />
                            <DeleteButton content="Are you sure" title="Delete Product" />
                        </Table>
                    </ProductDispatchContext.Provider >
            </ProductStateContext.Provider >
    )
}
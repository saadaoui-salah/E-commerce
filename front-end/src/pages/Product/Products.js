import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { ProductContext } from '../../reducers/context'
import { productReducer } from '../../reducers/reducers'
import { productsState } from '../../reducers/state'
import { useEffect, useMemo, useReducer } from 'react'
import { useQuery, useLazyQuery } from '@apollo/client'
import { addProduct } from '../../reducers/actoins'
import { LOAD_PRODUCTS } from '../../graphql/queries'

const columns = ["Image", "Product", "Category", "Quantity", "Price", "Benifits"];
function createData(image, product, category, quantity, bPrice, vPrice) {
    const benifits = parseFloat(vPrice) - parseFloat(bPrice);
    category = `${category.parentCategory.category} / ${category.category}`
    return [image, product, category, quantity, vPrice, parseFloat(benifits)];
}



export default function Products() {
    const [productState, productDispatch] = useReducer(productReducer, productsState)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const { error, laoding, data } = useQuery(LOAD_PRODUCTS)
    console.log(data)
    useEffect(() => {
        if (!laoding && data !== undefined ) {
            data.getProducts.map(product => {
                productDispatch(addProduct(product))
            })
        }
    }, [laoding])
    let rows = []
    productState.map(product => {
        rows = [...rows, createData(
            product.image,
            product.name,
            product.category,
            product.quantity,
            product.bPrice,
            product.vPrice
        )]
    })
    return (
        <ProductContext.Provider value={{ state: productState, dispatch: productDispatch }}>
            <Table columns={columns} rows={rows} options={options_}>
                <AddButton value="Product" content={<ProductFrom />} title="Create New Product" />
                <DeleteButton content="Are you sure" title="Delete Product" />
            </Table>
        </ProductContext.Provider >
    )
}
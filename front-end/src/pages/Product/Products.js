import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_PRODUCTS } from '../../graphql/queries'

const columns = ["Image", "Product", "Category", "Quantity", "Price", "Benifits"];
function createData(image, product, category, parentCategory, quantity, bPrice, vPrice) {
    const benifits = parseFloat(vPrice) - parseFloat(bPrice);
    category = `${parentCategory.category} / ${category.category}`
    return [image, product, category, quantity, vPrice, parseFloat(benifits)];
}



export default function Products() {
    const [products, setProducts] = useState([])
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const { error, laoding, data } = useQuery(LOAD_PRODUCTS)
    useEffect(() => {
        if (!laoding && data !== undefined) {
            setProducts(data.getProducts)
        }
    }, [data])
    var rows = []
    products.map(product => {
        rows = [...rows, createData(
            product.image,
            product.name,
            product.category,
            product.parentCategory,
            product.quantity,
            product.bPrice,
            product.vPrice
        )]
    })
    return (
        <Table columns={columns} rows={rows} options={options_}>
            <AddButton value="Product" content={<ProductFrom />} title="Create New Product" />
            <DeleteButton content="Are you sure" title="Delete Product" />
        </Table>
    )
}
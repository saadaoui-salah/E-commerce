import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { useContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_PRODUCTS } from '../../graphql/queries'
import { Typography, Container, Divider } from '@material-ui/core'
import { DarkContext } from '../../reducers/context'

const columns = ["Image", "Product", "Category", "Quantity", "Price", "Benifits"];
function createData(image, product, category, parentCategory, quantity, bPrice, vPrice) {
    const benifits = parseFloat(vPrice) - parseFloat(bPrice);
    category = `${parentCategory.category} / ${category.category}`
    return [image, product, category, quantity, vPrice, benifits.toFixed(2)];
}



export default function Products() {
    const { state } = useContext(DarkContext)
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
            product.priceAchat,
            product.priceVender
        )]
    })
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" style={{ color: state ? "#fff" : "#000",  paddingTop:"20px" }}>Manage Your Products</Typography>
            <Divider style={{marginTop:"10px", marginBottom:"30px", backgroundColor: state ? "#f1f1f1" : "#010101" }} />
            <div style={{ marginBottom: "10px" }}>
                <AddButton value="Product" content={<ProductFrom />} title="Create New Product" style={{marginRight:"100px"}} />
                <DeleteButton content="Are you sure" title="Delete Product" />
            </div>
            <Table columns={columns} style={{width:"100%"}} rows={rows} options={options_}>
            </Table>
        </Container>
    )
}
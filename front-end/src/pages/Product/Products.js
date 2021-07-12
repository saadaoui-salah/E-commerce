import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { useContext, useCallback, useEffect, useState } from 'react'
import { Typography, Container, Divider } from '@material-ui/core'
import { DarkContext } from '../../reducers/context'
import { useQuery } from '@apollo/client'
import { LOAD_PRODUCTS } from '../../graphql/queries'


function createData(image, product, category, parentCategory, quantity, bPrice, vPrice) {
    const benifits = parseFloat(vPrice) - parseFloat(bPrice);
    category = parentCategory.category + (category ? ' - ' + category.category : '') 
    return [image, product, category, quantity, vPrice, benifits.toFixed(2)];
}

const ProductTable = () => {
    const [products, setProducts] = useState([])
    const columns = ["Image", "Product", "Category", "Quantity", "Price", "Benifits"];
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const { error, laoding, data } = useQuery(LOAD_PRODUCTS)
    useEffect(() => {
        if ( !laoding && data !== undefined) {
            console.log(data.getProducts)
            setProducts([...data.getProducts])
        }
    }, [data])
    const rows =  useCallback(() => {
        var tableRows = []
        if (products){
            products.map(product => {
                 tableRows = [...tableRows, createData(
                    product.image,
                    product.name,
                    product.category,
                    product.parentCategory,
                    product.quantity,
                    product.priceAchat,
                    product.priceVender
                )]
            })
            return tableRows
        } 
        return tableRows
    },[products])
    return (
        <Table columns={columns} style={{ width: "100%" }} rows={rows} options={options_} />
    )
}

export default function Products() {
    const { state } = useContext(DarkContext) 
    return (
        <Container>
            <Typography
                variant="h4"
                style={{
                    fontWeight: "bold",
                    color: state ? "#fff" : "#25265e",
                    paddingTop: "20px"
                }}>
                Manage Your Products
            </Typography>
            <Divider
                style={{
                    marginTop: "10px",
                    marginBottom: "30px",
                    backgroundColor: state ? "#f1f1f1" : "#25265e"
                }}
            />
            <div style={{ marginBottom: "10px" }}>
            <AddButton 
                value="Product" 
                content={<ProductFrom />} 
                title="Create New Product" 
                style={{ marginRight: "100px" }} 
                />
                <DeleteButton content="Are you sure" title="Delete Product" />
            </div>
            <ProductTable />
        </Container>
    )
}
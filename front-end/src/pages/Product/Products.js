import Table from '../../components/Table'
import { AddButton, TableOptions, DeleteButton } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { useContext, useCallback, useRef, useEffect, useState } from 'react'
import { Typography, Container, Divider } from '@material-ui/core'
import { DarkContext } from '../../reducers/context'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
import { LOAD_PRODUCTS, LOAD_CATEGORIES, LOAD_PARENT_CATEGORIES } from '../../graphql/queries'
import { ADD_PRODUCT } from '../../graphql/mutations'
import { useForm } from '../../hooks'

const columns = ["Image", "Product", "Category", "Quantity", "Price", "Benifits"];
function createData(image, product, category, parentCategory, quantity, bPrice, vPrice) {
    const benifits = parseFloat(vPrice) - parseFloat(bPrice);
    category = `${parentCategory.category} / ${category.category}`
    return [image, product, category, quantity, vPrice, benifits.toFixed(2)];
}

const ProductTable = () => {
    const [products, setProducts] = useState([])
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    const { error, laoding, data } = useQuery(LOAD_PRODUCTS)
    useEffect(() => {
        if (!laoding && data !== undefined) {
            setProducts(data.getProducts)
        }
    }, [data])
    const rows = useCallback(() => {
        var tableRows = []
        if (products){
            products.map(product => {
                 tableRows = [, createData(
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
        <Table columns={columns} style={{ width: "100%" }} rows={rows()} options={options_} />
    )
}

export default function Products() {
    const { state } = useContext(DarkContext) 
    const { categoriesState, setCategories } = useRef([])
    const { parentCategoriesState, setParentCategories } = useRef([])
    const { values, onChange, onSubmit } = useForm(createProduct, {
        id: 61,
        vendor: 5,
        name: '',
        parentCategory: '',
        category: '',
        quantity: '',
        detail: '',
        priceVender: '',
        priceAchat: '',
    })
    const {  loading, data } = useQuery(LOAD_PARENT_CATEGORIES)
    const [getCategories, response] = useLazyQuery(LOAD_CATEGORIES)
    const [addProduct, { newData, error }] = useMutation(ADD_PRODUCT, { variales: values })
    function createProduct() {
        addProduct()
    }
    useEffect(() => {
        if (!loading && data !== undefined) {
            console.log(data.getCategories)
            setParentCategories(data.getCategories)
        }
    }, [data])
    useEffect(() => {
        if (values.parentCategory !== '') {
            getCategories({ variables: { id: values.parentCategory.id } })
        }
        if (response.data !== undefined) {
            setCategories(response.data.getCategories)
        }
    }, [values.parentCategory, response.data])
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
                content={<ProductFrom 
                    categories={categoriesState} 
                    parentCategories={parentCategoriesState} 
                    onChange={onChange} 
                    onSubmit={onSubmit} 
                    />} 
                title="Create New Product" 
                style={{ marginRight: "100px" }} 
                />
                <DeleteButton content="Are you sure" title="Delete Product" />
            </div>
            <ProductTable />
        </Container>
    )
}
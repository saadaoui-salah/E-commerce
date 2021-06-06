import {
    Grid,
    Button,
    MenuItem,
    TextField,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useQuery, useLazyQuery} from '@apollo/client'
import { LOAD_CATEGORIES, LOAD_PARENT_CATEGORIES } from '../graphql/queries'

export function ProductFrom() {
    const [categoriesState, setCategories] = useState([])
    const [paretnCategoriesState, setParentCategories] = useState([])
    const { error, loading, data } = useQuery(LOAD_CATEGORIES)
    const [getParentCategories, response] = useLazyQuery(LOAD_PARENT_CATEGORIES)
    const [product, setProduct] = useState({
        name: '',
        parentCategory: '',
        category: '',
        quantity: '',
        vPrice: '',
        bPrice: '',
    })
    useEffect(() => {
        if (!loading && data !== undefined) {
            setCategories(data.getCategories)
        }
    }, [data])
    useEffect(() => {
        if (product.category !== "" ) {
            getParentCategories({variables: {id: product.category.id}})
        }
        if (response.data !== undefined){
            setParentCategories(response.data.getCategories)
        }
    }, [product.category, response.data])
    
    function setCategory(e) {
        setProduct({
            ...product,
            category: e.target.value
        })
        console.log(product)
    }
    function setParentCategory(e) {
        setProduct({
            ...product,
            parentCategory: e.target.value
        })
        console.log(product)
    }
    return (
        <>
            <Grid container spacing={2} direction="row">
                <Grid item>
                    <Grid container spacing={2} justify="center" align="center" direction="column">
                        <Grid item>
                            <TextField
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                label="Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: '100%' }}
                                select
                                variant="outlined"
                                onChange={setCategory}
                                label="Category">
                                {categoriesState.map(category => {
                                    return (
                                        <MenuItem value={category} key={category.id}>{category.category}</MenuItem>
                                        )
                                    })
                                }
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: '100%' }}
                                select
                                onChange={setParentCategory}
                                label="Parent Category"
                                variant="outlined"
                                >
                                {paretnCategoriesState.map(category => {
                                    return (
                                        <MenuItem value={category} key={category.id}>{category.category}</MenuItem>
                                        )
                                    })
                                }
                            </TextField>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container spacing={2} justify="center" align="center" direction="column">
                        <Grid item>
                            <TextField
                                onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                                label="Quantity"
                                variant="outlined"
                                />
                        </Grid>
                        <Grid item>
                            <TextField
                                onChange={(e) => setProduct({ ...product, bPrice: e.target.value })}
                                label="Buy Price"
                                variant="outlined"
                                />
                        </Grid>
                        <Grid item>
                            <TextField
                                onChange={(e) => setProduct({ ...product, vPrice: e.target.value })}
                                label="Vendre"
                                variant="outlined"
                                />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export function GlobalCategoryForm() {
    const [category, setCategory] = useState()
    return (
        <Grid container direction="row" justify="center" align="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ width: '100%' }}
                    label={"Sub Category"}
                    variant="outlined"
                    />
            </Grid>
        </Grid>
    )
}

export function SubCategoryForm() {
    const [category, setCategory] = useState()
    const { error, loading, data } = useQuery(LOAD_CATEGORIES)
    return (
        <Grid container direction="row" justify="center" align="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    select
                    label="Category"
                    style={{ width: '100%' }}
                    variant="outlined"
                >{ data ?
                    data.getCategories.map(category =>{
                        <MenuItem key={category.id}>{category.category}</MenuItem>

                    }):
                    "Nothing to select"
                }
                </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    onChange={e => setCategory(e.target.value)}
                    style={{ width: '100%' }}
                    label={"Sub Category"}
                    variant="outlined"
                />
            </Grid>
        </Grid>
    )
}

export function CollectionForm() {
    return (
        <Grid container direction="row" justify="center" align="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    style={{ width: '100%' }}
                    label="Collection Name"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    select
                    check="true"
                    label="Products"
                    style={{ width: '100%' }}
                    variant="outlined"
                >
                    <MenuItem>like</MenuItem>
                    <MenuItem>like</MenuItem>
                    <MenuItem>like</MenuItem>
                    <MenuItem>like</MenuItem>
                    <MenuItem>like</MenuItem>
                    <MenuItem>like</MenuItem>
                </TextField>
            </Grid>
        </Grid>
    )
}
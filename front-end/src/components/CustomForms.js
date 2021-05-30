import {
    Grid,
    MenuItem,
    TextField,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_CATEGORIES, LOAD_PARENT_CATEGORIES } from '../graphql/queries'

export function ProductFrom() {
    const [categories, setCategories] = useState([])
    const [paretnCategories, setParentCategories] = useState([])
    const [product, setProduct] = useState({
        name: '',
        parentCategory: '',
        category: '',
        quantity: '',
        vPrice: '',
        bPrice: '',
    })
    const { error, loading, data } = useQuery(LOAD_CATEGORIES)
    useEffect(() => {
        if (!loading) {
            data.getCategories.map(category => {
                setCategories([...categories, category])
            })
        }
    }, [data])
    const { isError, isLoading, parentCategoriesData } = useQuery(LOAD_PARENT_CATEGORIES)
    console.log(parentCategoriesData, isError)

    function setCategory(e) {
        setProduct({
            ...product,
            category: e.target.value
        })
    }
    function setParentCategory(e) {
        setProduct({
            ...product,
            category: e.target.value
        })
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
                                size="medium"
                                variant="outlined"
                                onChange={setCategory}
                                value={product.category ? product.category.category : null}
                                select
                                label="Select Category">
                                {categories.map(category => {
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
                                label="Child Category"
                                variant="outlined"
                            >
                                <MenuItem>T-shirt</MenuItem>
                                <MenuItem>T-shirt</MenuItem>
                                <MenuItem>T-shirt</MenuItem>
                                <MenuItem>T-shirt</MenuItem>
                                <MenuItem>T-shirt</MenuItem>
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
    return (
        <Grid container direction="row" justify="center" align="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    style={{ width: '100%' }}
                    label={"Sub Category"}
                    variant="outlined"
                />
            </Grid>
        </Grid>
    )
}

export function SubCategoryForm() {
    return (
        <Grid container direction="row" justify="center" align="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    select
                    label="Category"
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
            <Grid item xs={12} md={6}>
                <TextField
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
import {
    Grid,
    Button,
    MenuItem,
    TextField,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
import { LOAD_CATEGORIES, LOAD_PARENT_CATEGORIES } from '../graphql/queries'
import { ADD_PRODUCT } from '../graphql/mutations'
import { useForm } from '../hooks'

export function ProductFrom() {
    const [categoriesState, setCategories] = useState([])
    const [parentCategoriesState, setParentCategories] = useState([])
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
    const { error, loading, data } = useQuery(LOAD_PARENT_CATEGORIES)
    const [getCategories, response] = useLazyQuery(LOAD_CATEGORIES)

    const [addProduct, { newData, Error }] = useMutation(ADD_PRODUCT, { variales: values })

    function createProduct() {
        addProduct()
    }
    useEffect(() => {
        if (!loading && data !== undefined) {
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
        <>
            <Grid container spacing={2} direction="row">
                <Grid item>
                    <Grid container spacing={2} justify="center" align="center" direction="column">
                        <Grid item>
                            <TextField
                                onChange={(e) => onChange(e)}
                                label="Name"
                                name="name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                onChange={(e) => onChange(e)}
                                style={{ width: '100%' }}
                                select
                                name="parentCategory"
                                variant="outlined"
                                label="Parent Category">
                                {parentCategoriesState.map(category => {
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
                                name="category"
                                onChange={(e) => onChange(e)}
                                label="Category"
                                variant="outlined"
                            >
                                {categoriesState.map(category => {
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
                                onChange={(e) => onChange(e)}
                                label="Quantity"
                                name="quantity"
                                type="number"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                onChange={(e) => onChange(e)}
                                label="Buy Price"
                                name="priceAchat"
                                type="number"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                onChange={(e) => onChange(e)}
                                name="priceVendre"
                                label="Vendre"
                                type="number"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button onClick={(e) => onSubmit(e)}>ADD</Button>
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
                >{data ?
                    data.getCategories.map(category => {
                        <MenuItem key={category.id}>{category.category}</MenuItem>

                    }) :
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
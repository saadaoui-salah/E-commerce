import {
    Grid, Dialog,
    Button, DialogActions,
    MenuItem, DialogContent,
    TextField, DialogTitle,
} from '@material-ui/core'
import { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useState } from 'react'
import {LOAD_PARENT_CATEGORIES} from '../graphql/queries'
import { ADD_PRODUCT, ADD_CATEGORY } from '../graphql/mutations'
import { useForm } from '../hooks'

export function ProductDialogFrom({ handleClose, open }) {
    const [file, setFile] = useState([])
    const { values, onChange, onSubmit } = useForm(createProduct, {
        name: '',
        quantity: '',
        detail: '',
        priceVender: 0,
        priceAchat: 0,
    })
    const [addProduct] = useMutation(ADD_PRODUCT)
    function createProduct() {
        console.log({...values, ...file})
        addProduct({
            variables: {...values,  ...file}
        })
    }
    const handleOnChangeFile = ({ target: { validity, files: [file] } }) => {
        if (validity.valid) setFile({ image: file })
    }
    return (
        <Dialog
            fullWidth
            open={open}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">Create New Product</DialogTitle>
            <DialogContent>
                <Grid container direction="column">
                    <Grid container spacing={2} direction="column">
                        <Grid container spacing={2} direction="row">
                            <Grid item>
                                <Grid container spacing={2} justify="center" align="center" direction="column">
                                    <Grid item>
                                        <TextField
                                            onChange={(e) => onChange(e)}
                                            required
                                            fullWidth
                                            autoFocus
                                            label="Name"
                                            name="name"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            onChange={(e) => onChange(e)}
                                            label="Quantity"
                                            fullWidth
                                            name="quantity"
                                            type="number"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={2} justify="center" align="center" direction="column">
                                    <Grid item>
                                        <TextField
                                            onChange={(e) => onChange(e)}
                                            label="Buy Price"
                                            name="priceAchat"
                                            fullWidth
                                            type="number"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            onChange={(e) => onChange(e)}
                                            name="priceVender"
                                            fullWidth
                                            label="Vendre"
                                            required
                                            type="number"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0} direction="column">
                            <TextField
                                fullWidth
                                style={{ marginTop: "10px" }}
                                rows={10}
                                onChange={e => onChange(e)}
                                name="detail"
                                label="Details"
                                type="text"
                                multiline={true}
                                variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} direction="column">
                        <input
                            label="Upload an image"
                            type="file"
                            name="image"
                            onChange={(e) => handleOnChangeFile(e)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Cancel
                </Button>
                <Button onClick={(e) => { onSubmit(e); handleClose() }} variant="contained" color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export function GlobalCategoryForm() {
    const { values, onChange, onSubmit } = useForm(createCategory, {
        category: ''
    })
    const [addCategory, response] = useMutation(ADD_CATEGORY, { variales: values })
    function createCategory() {
        addCategory()
    }
    return (
        <Grid container direction="row" justify="center" align="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    onChange={(e) => onChange(e)}
                    style={{ width: '100%' }}
                    label={"Sub Category"}
                    variant="outlined"
                    value={values.category}
                />
            </Grid>
        </Grid>
    )
}


export function SubCategoryForm() {
    const { error, loading, data } = useQuery(LOAD_PARENT_CATEGORIES)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        if (!loading && data !== undefined) {
            setCategories(data.getCategories)
            console.log(categories)
        }
    }, [loading, data])
    const { values, onChange, onSubmit } = useForm(createCategory, {
        parentCategories: 2,
        category: 'from react'
    })
    const [addCategory, response] = useMutation(ADD_CATEGORY, { variales: { category: "from react" } })
    function createCategory() {
        addCategory()
    }
    return (
        <Grid container direction="row" justify="space-evenly" align="center" spacing={2}>
            <Grid item xs={12} md={3} >
                <TextField
                    select
                    size="small"
                    name="parentCategories"
                    onChange={e => onChange(e)}
                    label="Category"
                    style={{ width: '100%' }}
                    variant="outlined"
                >{
                        categories.length > 0 ?
                            categories.map(category => {
                                <MenuItem key={category.id} value={category.id}>{category.category}</MenuItem>

                            }) :
                            <MenuItem > Nothing to select </MenuItem>
                    }
                </TextField>
            </Grid>
            <Grid item xs={12} md={3}>
                <TextField
                    size="small"
                    name="category"
                    onChange={e => onChange(e)}
                    style={{ width: '100%' }}
                    value={values.category}
                    label={"Sub Category"}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} md={2}>
                <Button onClick={onSubmit} color="primary" variant="contained" >Add Category</Button>
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

            </Grid>
        </Grid>
    )
}
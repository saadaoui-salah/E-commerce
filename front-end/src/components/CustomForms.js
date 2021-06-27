import {
    Grid,
    Button,
    MenuItem,
    TextField,
} from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { LOAD_CATEGORIES } from '../graphql/queries'

export function ProductFrom({onChange, onSubmit, categories, parentCategories}) {

    return (
        <>
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
                                style={{ width: '100%' }}
                                select
                                name="parentCategory"
                                fullWidth
                                variant="outlined"
                                label="Parent Category">
                                {parentCategories ? 
                                parentCategories.map(category => {
                                    return (
                                        <MenuItem value={category} key={category.id}>{category.category}</MenuItem>
                                    )
                                }) : 
                                "Nothing to select"
                                }
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{ width: '100%' }}
                                select
                                fullWidth
                                name="category"
                                onChange={(e) => onChange(e)}
                                label="Category"
                                variant="outlined"
                                >
                                {categories ? categories.map(category => {
                                    return (
                                        <MenuItem value={category} key={category.id}>{category.category}</MenuItem>
                                        )
                                    })
                                    : 
                                   "Nothing to select"
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
                                fullWidth
                                name="quantity"
                                type="number"
                                required
                                variant="outlined"
                            />
                        </Grid>
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
                                name="priceVendre"
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
            <Grid container spacing={0} direction="row">
                <TextField
                    fullWidth
                    style={{marginTop:"10px"}}
                    rows={10}
                    onChange={e => onChange(e)}
                    name="detail"
                    label="Details"
                    type="text"
                    multiline={true}
                    variant="outlined"/>
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
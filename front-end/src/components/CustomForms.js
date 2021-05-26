import {
    Grid,
    MenuItem,
    TextField,
} from '@material-ui/core'
import {useSelect} from '../hooks'
import {SelectField} from '../components/sub-components/CustomTextField'
import { useEffect, useState } from 'react'
import {useQuery} from '@apollo/client'
import  {LOAD_CATEGORIES} from '../graphql/queries'

export function ProductFrom() {
    const [categories, setCategories] = useState([''])
    const [state, setState] = useState({
        name:'',
        parentCategory:'',
        category:'',
        quantity:'',
        vPrice:'',
        bPrice:'',    
    })
    const {error, loading, data} = useQuery(LOAD_CATEGORIES)
    useEffect(() => {
        if (!loading){
            data.getCategories.map(category=>{
                if (categories == ['']){
                    setCategories([category.category])
                }
                setCategories([...categories,category.category])
            }) 
            console.log(categories)
        }
    }, [data])
    function handleChange(value){
        setState([...state, value])
    }
    return (
        <>
            <Grid container spacing={2} direction="row">
                <Grid item>
                    <Grid container spacing={2} justify="center" align="center" direction="column">
                        <Grid item>
                            <TextField
                                label="Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <SelectField 
                                state={categories}
                                setState={setCategories}
                                choices={categories}
                            />
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
                                label="Quantity"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Buy Price"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
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
                    style={{width:'100%'}}
                    label={ "Sub Category"}
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
                    style={{width:'100%'}}
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
                    style={{width:'100%'}}
                    label={ "Sub Category"}
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
                    style={{width:'100%'}}
                    label="Collection Name"
                    variant="outlined"
                />
            </Grid>           
            <Grid item xs={12} md={6}>
                <TextField
                    select
                    check="true"
                    label="Products"
                    style={{width:'100%'}}
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
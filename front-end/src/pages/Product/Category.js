import { OptionsContext } from '../../reducers/context'
import {
    AddButton,
    DeleteButton,
} from '../../components/sub-components/Buttons'
import {
    GlobalCategoryForm,
    SubCategoryForm
} from '../../components/CustomForms'
import { SearchField } from '../../components/sub-components/CustomTextField'
import { CollectionCard } from '../../components/CustomCards'
import { Grid, Paper, List, ListItem, makeStyles } from '@material-ui/core'
import { options } from '../../reducers/state'
import { OptionsReducer } from '../../reducers/reducers'
import { useReducer } from 'react'
import clsx  from "clsx"
import { useState } from 'react'

export default function Category() {
    const [active, setActive] = useState(1)
    const useStyle = makeStyles(()=>({
       headers: {
            padding:"10px 20px",
            fontWeight:"bold",
            cursor:"pointer",
            userSelect:'none',
            "&:hover":{
                transition:"0.4s",
                backgroundColor:"#f1f1f1",
            },       
        },
        active:{
            color:"#0af",
            backgroundColor:"#f1f1f1",
            "&::before":{
                content:'',
                color:"#0af",
                innerWidth: "100%",
                height: "5px"
            }     
        }
    })) 
    const style = useStyle()
    const [optionsState, optionsDispatch] = useReducer(OptionsReducer, options)
    return (
        <OptionsContext.Provider value={{state: optionsState, dispatch: optionsDispatch}}>
            <Paper>
                    <div style={{display:"flex", alignItems:"start"}}>
                        <ListItem onClick={() => setActive(1)} className={
                            clsx(
                                style.headers,
                                { [style.active]: active === 1 }
                                )}>
                                    Categories
                        </ListItem>
                        <ListItem onClick={() => setActive(2)} className={
                            
                            clsx(
                                style.headers,
                                {[style.active]: active === 2  
                                })}>
                            Parent Categories
                            </ListItem>
                        <ListItem onClick={() => setActive(3)} className={
                            clsx(
                                style.headers,
                                {[style.active]: active === 3  
                                })}>
                            Collections
                        </ListItem>
                    </div>
                    <div style={{marginTop:"20px"}}>

                    <Grid container>
                        <SubCategoryForm />
                        
                    </Grid>
                {/* <Grid container justify="space-between" >
                    <GlobalCategoryForm />
                    <DeleteButton
                    title="Delete Category"
                    content="Are you sure, you want to delete this category"
                    />
                    <SearchField />
                </Grid> */}
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CollectionCard id={1} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CollectionCard id={2} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CollectionCard id={3}/>
                    </Grid>
                </Grid>
                </div>
            </Paper>
        </OptionsContext.Provider >

    )
}
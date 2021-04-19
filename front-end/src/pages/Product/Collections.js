import { Grid } from '@material-ui/core'
import { CollectionCard } from '../../components/CustomCards'
import { AddBtn,DeleteBtn } from '../../components/sub-components/Buttons'
import { CollectionForm } from '../../components/CustomForms'
import { SearchBar } from '../../components/sub-components/CustomTextField'
import { useReducer } from 'react'
import { OptionsStateContext, OptionsDispatchContext } from '../../reducers/context'
import { initialState } from '../../reducers/state'
import { OptionsReducer } from '../../reducers/reducers'



export default function Collections() {
    const [state, dispatch] = useReducer(OptionsReducer, initialState.options)
    return (
    <OptionsStateContext.Provider value={state}>
        <OptionsDispatchContext.Provider value={dispatch}>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={4}  lg={4}>
                    <AddBtn value="Collection" content={<CollectionForm />} title="Create New Collection" />
                    <DeleteBtn style={{marginLeft:'10px !important'}} title="Delete Collection" content="Do you want to remove this collection ?"/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <SearchBar />
                </Grid>
            </Grid>
            <Grid container justify="center" wrap="no-wrap" spacing={2}>
                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                    <CollectionCard />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                    <CollectionCard />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                    <CollectionCard />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                    <CollectionCard />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                    <CollectionCard />
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                    <CollectionCard />
                </Grid>
            </Grid>
        </OptionsDispatchContext.Provider>
    </OptionsStateContext.Provider >
    )
}
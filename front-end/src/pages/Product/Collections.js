import { Grid, Paper } from '@material-ui/core'
import { CollectionCard } from '../../components/CustomCards'
import { AddButton, DeleteButton } from '../../components/sub-components/Buttons'
import { CollectionForm } from '../../components/CustomForms'
import { SearchField } from '../../components/sub-components/CustomTextField'
import { OptionsStateContext, OptionsDispatchContext } from '../../reducers/context'
import { OptionsReducer } from '../../reducers/reducers'
import { options } from '../../reducers/state'
import { useReducer } from 'react'


export default function Collections() {
    const [optionsState, optionsDispatch] = useReducer(OptionsReducer, options)
    return (
        <OptionsStateContext.Provider value={optionsState}>
            <OptionsDispatchContext.Provider value={optionsDispatch}>
                <Grid container spacing={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <AddButton
                                value="Collection"
                                content={<CollectionForm />}
                                title="Create New Collection"
                            />
                            <DeleteButton
                                title="Delete Collection"
                                content="Do you want to remove this collection ?"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <SearchField />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" wrap="no-wrap" spacing={2}>
                        <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                            <CollectionCard id={1} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                            <CollectionCard id={2} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                            <CollectionCard id={3} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                            <CollectionCard id={4} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={6} lg={4} xl={4}>

                            <CollectionCard id={5} />
                        </Grid>
                    </Grid>
                </Grid>
            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >
    )
}
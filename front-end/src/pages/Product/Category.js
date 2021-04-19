import { useReducer } from 'react'
import {
    OptionsStateContext,
    OptionsDispatchContext
} from '../../reducers/context'
import {
    AddButton,
    DeleteButton,
} from '../../components/sub-components/Buttons'
import { OptionsReducer } from '../../reducers/reducers'
import { initialState } from '../../reducers/state'
import {
    GlobalCategoryForm,
    SubCategoryForm
} from '../../components/CustomForms'
import {SearchField} from '../../components/sub-components/CustomTextField'
import { CollectionCard } from '../../components/CustomCards'
import { Grid } from '@material-ui/core'

export default function Category() {
    const [state, dispatch] = useReducer(OptionsReducer, initialState.options)
    return (
        <OptionsStateContext.Provider value={state}>
            <OptionsDispatchContext.Provider value={dispatch}>
                <Grid container justify="space-between" >
                    <AddButton
                        value="global category"
                        content={<GlobalCategoryForm />}
                        title="Create New Global Category"
                    />
                    <AddButton
                        value="sub category"
                        content={<SubCategoryForm />}
                        title="Create New Sub Category"
                    />
                    <DeleteButton
                        title="Delete Category"
                        content="Are you sure, you want to delete this category"
                    />
                    <SearchField/>
                </Grid>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CollectionCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CollectionCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CollectionCard />
                    </Grid>
                </Grid>

            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >

    )
}
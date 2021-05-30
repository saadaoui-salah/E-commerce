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
import { Grid } from '@material-ui/core'
import { options } from '../../reducers/state'
import { OptionsReducer } from '../../reducers/reducers'
import { useReducer } from 'react'


export default function Category() {
    const [optionsState, optionsDispatch] = useReducer(OptionsReducer, options)
    return (
        <OptionsContext.Provider value={{state: optionsState, dispatch: optionsDispatch}}>
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
                    <SearchField />
                </Grid>
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

        </OptionsContext.Provider >

    )
}
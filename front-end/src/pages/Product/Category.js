import CustomTable from '../../components/Table'
import { AddBtn, Options } from '../../components/sub-components/Buttons'
import { GlobalCategoryForm, SubCategoryForm } from '../../components/CustomForms'
import { useReducer } from 'react'
import { OptionsStateContext, OptionsDispatchContext } from '../../reducers/context'
import { initialState } from '../../reducers/state'
import { OptionsReducer } from '../../reducers/reducers'


const columns = ["Image", "Product", "Category", "Quantity", "Buy Price", "Vendre Price", "Benifits", "Options"];

function createData(image, product, category, quantity, bPrice, vPrice) {
    const benifits = vPrice - bPrice;
    return [image, product, category, quantity, bPrice, vPrice, benifits];
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
    createData('India', 'IN', 1324171354, 3287263, 200, 300),
];

export default function Category() {
    const [state, dispatch] = useReducer(OptionsReducer, initialState.options)
    const options = { name: "Options", component: (id) => <Options id={id} /> }
    return (
        <OptionsStateContext.Provider value={state}>
            <OptionsDispatchContext.Provider value={dispatch}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'space-between' }}>
                    <AddBtn
                        value="global category"
                        content={<GlobalCategoryForm />}
                        title="Create New Global Category"
                    />
                    <AddBtn
                        value="sub category"
                        content={<SubCategoryForm />}
                        title="Create New Sub Category"
                    />
                </div>
                <CustomTable
                    rows={rows}
                    columns={columns}
                    options={options}
                />
            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >

    )
}
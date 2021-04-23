import Table from '../../components/Table'
import { AddButton, TableOptions } from '../../components/sub-components/Buttons'
import { ProductFrom } from '../../components/CustomForms'
import { Grid } from '@material-ui/core'
import { OptionsReducer } from '../../reducers/reducers'
import {initialState} from '../../reducers/state'
import {useReducer } from 'react'
import {OptionsStateContext, OptionsDispatchContext} from '../../reducers/context'


const columns = ["ID", "User", "Date", "Total Price","Status"];
function createData(id, user, date, total_price,status) {
    return [id, user, date, total_price, status];
}

const rows = [
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
    createData('India', "user",'2020/02/03', 1324171354, "Done"),
];

export default function Orders(){
    const [options, dispatch] = useReducer(OptionsReducer,initialState.options)
    const options_ = { name: "Options", component: (id) => <TableOptions id={id} /> }
    return (
        <OptionsStateContext.Provider value={options}>
            <OptionsDispatchContext.Provider value={dispatch}>
                <Grid
                    container
                    justify="flex-end"
                >
                </Grid>
                <Table columns={columns} rows={rows} options={options_} />
            </OptionsDispatchContext.Provider>
        </OptionsStateContext.Provider >
    )
}
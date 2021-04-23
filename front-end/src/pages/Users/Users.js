import Table from '../../components/Table'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import TabletIcon from '@material-ui/icons/Tablet';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { Grid } from '@material-ui/core';

const columns = ["Contries", <DesktopWindowsIcon/>, <TabletIcon/>, <PhoneIphoneIcon/>]

function createData(contry, desktop, tablet, phone){
    return [contry, desktop, tablet, phone]
}

const rows = [
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
    createData("Algeria", "20%", "30%", "80%"),
]

export default function Users(){
    return(
        <>
        <Grid container xs={12} sm={12} md={6}>
        <Table rows={rows} columns={columns} />
        </Grid>
        </>
        )
}
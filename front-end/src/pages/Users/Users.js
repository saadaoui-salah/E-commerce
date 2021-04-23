import Table from '../../components/Table'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import TabletIcon from '@material-ui/icons/Tablet';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

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
        <Table rows={rows} columns={columns} />
        </>
        )
}
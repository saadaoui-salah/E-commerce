import { HomeCard } from '../components/CustomCards'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Map from '../components/Map.js'
import Table from '../components/Table'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import TabletIcon from '@material-ui/icons/Tablet';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LineChart from '../components/LineChart'
import { useQuery } from '@apollo/client'
import { HOME_COUNTERS } from '../graphql/queries'


const useStyles = makeStyles(() => ({

    icon: {
        color: 'white',
        width: '30px',
        height: '30px',
        borderRadius: '100%',
        padding: '10px'
    }
}))

const columns = ["Contries", <DesktopWindowsIcon />, <TabletIcon />, <PhoneIphoneIcon />]

function createData(contry, desktop, tablet, phone) {
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

const Cards = () => {
    const style = useStyles()
    const { error, loading, data } = useQuery(HOME_COUNTERS)
return (
    <>
    <Grid alignItems="center" direction='row' justify='center' spacing={2} container >
    <Grid item md={3} xs={6}>
        <div style={{ border:"5px #fff", marginBottom:"10px"}}>
        {loading ? null :
            <HomeCard
            name="Products"
            number={data === undefined ? 0 : data.productsCounter}
            bgColor='#0af'
            icon={<LocalMallIcon className={style.icon} />} />
        }
        </div>
    </Grid>
    <Grid item md={3} xs={6}>
        <div style={{ border:"5px #fff", marginBottom:"10px"}}>
        {loading ? null :
            <HomeCard
            name="consumers"
            number={data === undefined ? 0 : data.consumersCounter}
            bgColor='red'
            icon={<PeopleIcon className={style.icon} />} />
        }
        </div>
    </Grid>
        </Grid>
<Grid alignItems="center" direction='row' justify='center' spacing={2} container >
    <Grid item md={3} xs={6}>
        <div style={{ border:"5px #fff", marginBottom:"10px"}}>
        {loading ? null :
            <HomeCard
            name="Orders"
            number={data === undefined ? 0 : data.ordersCounter}
            bgColor='#ffc23e'
            icon={<ShoppingCartIcon className={style.icon} />} />
        }
        </div>
    </Grid>
    <Grid item md={3} xs={6}>
        <div style={{ border:"5px #fff", marginBottom:"10px"}}>
        {loading ? null :
            <HomeCard
            name="Benifits"
            number={data === undefined ? 0 : data.benifitsCounter}
            bgColor='#36ff36b8'
            icon={<AttachMoneyIcon className={style.icon} />} />
        }
        </div>
    </Grid>
</Grid>
    </>
    )
}

function DashboardPage() {
    return (
        <>
                    <Grid alignItems="center" direction='column' justify='center' spacing={2} container >
                        <Cards/>
                        <Grid direction='row' justify='content' container >
                        </Grid>
                    </Grid>
                <Grid alignItems="center" direction='row' justify='center' container style={{ marginTop: '35px' }}>
                    <Grid item sm={6} xs={12} md={6}>
                        <Table rows={rows} columns={columns} />
                    </Grid>
                    <Grid item sm={6} xs={12} md={6}>
                        <Paper style={{ backgroundColor: "#4c5364" }}>
                            <LineChart />
                        </Paper>
                        <Paper style={{ backgroundColor: "#4c5364" }}>
                            <LineChart />
                        </Paper>
                    </Grid>
                </Grid>
        </>
    )
}

export default DashboardPage
import {HomeCard} from '../components/CustomCards'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Map from '../components/Map.js'
import LineChart from '../components/LineChart'
const useStyles = makeStyles(() => ({

    icon: {
        color: 'white',
        width: '30px',
        height: '30px',
        borderRadius: '100%',
        padding: '10px'
    }
}))

function DashboardPage() {
    const style = useStyles()
    return (
        <>
            <Grid alignItems="center" direction='row' justify='center' container spacing={2}>
                <Grid item sm={4} md={3} xs={6}>
                    <HomeCard name="Products" number={2000} bgColor='#0af' icon={<LocalMallIcon className={style.icon} />} />
                </Grid>
                <Grid item sm={4} md={3} xs={6}>
                    <HomeCard name="Costumers" number={2000} bgColor='red' icon={<PeopleIcon className={style.icon} />} />
                </Grid>
                <Grid item sm={4} md={3} xs={6}>
                    <HomeCard name="Orders" number={2000} bgColor='#ffc23e' icon={<ShoppingCartIcon className={style.icon} />} />
                </Grid>
                <Grid item sm={4} md={3} xs={6}>
                    <HomeCard name="Benifits" number={2000} bgColor='#36ff36b8' icon={<AttachMoneyIcon className={style.icon} />} />
                </Grid>
                <Grid alignItems="center" direction='row' justify='center' container style={{ margin: '0px 35px' }}>
                    <Grid item sm={12} xs={12} md={8}>
                        <Map />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <LineChart />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardPage
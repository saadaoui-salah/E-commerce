import {
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: "#fff",
        marginLeft: '5px',
        '&:hover': {
            transition: '0.3s',
            color: "#0af"
        }
    },
    slash: {
        marginLeft: '5px',
        color: '#f1f1f1',
        fontWeight: 'bold'
    },
    active: {
        color: "#0af"
    }

}))

export default function Routers({ link, data }) {
    const style = useStyles()
    return (
        <Grid>
            <Paper style={{ backgroundColor: "#4c5364", marginBottom: "10px" }}>
                <Grid container justify="flex-start">
                    {
                        data.items.map(item => {
                            return (
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    key={item.id}
                                    to={`/${link}${item.to}`}>
                                    <div style={{ display: 'flex' }}>
                                        <p className={style.link}>{item.enName}</p>
                                        <p className={style.slash}>/ </p>
                                    </div>
                                </Link>
                            )

                        })
                    }
                </Grid>
            </Paper>
            <Paper style={{ backgroundColor: "grey" }}>
                <Switch>
                    {data.pages.map(page => {
                        return (
                            <Route key={page.id} path={`/${link}/${page.path}`} component={page.component} />
                        )
                    }
                    )
                    }
                </Switch>
            </Paper>
        </Grid>
    )
}
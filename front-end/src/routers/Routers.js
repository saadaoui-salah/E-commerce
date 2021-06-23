import {
    Switch,
    Route,
    Link,
    useLocation
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
        textDecoration: 'none',
        fontWeight: 'bold',
        marginLeft: '5px',
        color: "#0af"
    }

}))

export const activatePath = (location, path, style) => {
    path = path.split("/")[1]
    if (path === location ){
        return style.active
    }
    return style.link
}

export default function Routers({ link, data }) {
    const style = useStyles()
    const location = useLocation()
    const locationPath = location.pathname.split("/")[2]
    return (
        <Grid>
            <Paper style={{ backgroundColor: "#4c5364", marginBottom: "10px", paddingLeft:"20px" }}>
                <Grid container justify="flex-start">
                    {
                        data.items.map(item => {
                            return (
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    key={item.id}
                                    to={`/${link}${item.to}`}>
                                    <div style={{ display: 'flex' }}>
                                        <p className={activatePath(locationPath, item.to, style)}>{item.enName}</p>
                                        <p className={style.slash}>/ </p>
                                    </div>
                                </Link>
                            )

                        })
                    }
                </Grid>
            </Paper>
                <Switch>
                    {data.pages.map(page => {
                        return (
                            <Route key={page.id} path={`/${link}/${page.path}`} component={page.component} />
                        )
                    }
                    )
                    }
                </Switch>
        </Grid>
    )
}
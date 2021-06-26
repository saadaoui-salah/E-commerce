import {
    Switch,
    Route,
    Link,
    useLocation
} from 'react-router-dom'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DarkContext } from '../reducers/context'
import { useContext } from 'react'


export const activatePath = (location, path, style) => {
    path = path.split("/")[1]
    if (path === location ){
        return style.active
    }
    return style.link
}

export default function Routers({ link, data }) {
    const {state} = useContext(DarkContext) 
    const useStyles = makeStyles(() => ({
        link: {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: state ? "#fff" : "#606060",
            marginLeft: '5px',
            '&:hover': {
                transition: '0.3s',
                color: state ? "#0af" : "#1a73e8"
            }
        },
        slash: {
            marginLeft: '5px',
            color: state ? '#f1f1f1' : '#606060',
            fontWeight: 'bold'
        },
        active: {
            textDecoration: 'none',
            fontWeight: 'bold',
            marginLeft: '5px',
            color: state ? "#0af" : "#1a73e8"
        }
    
    }))
    const style = useStyles()
    const location = useLocation()
    const locationPath = location.pathname.split("/")[2]
    return (
        <Grid>
            <Paper elevation={0} style={{ backgroundColor: state ? "#4c5364" : "#fff", marginBottom: "10px", paddingLeft:"20px" }}>
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
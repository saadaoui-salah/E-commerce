import {
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: "#888",
        marginLeft: '5px',
        '&:hover': {
            transition: '0.5s',
            color: "#202020"
        }
    },
    slash: {
        marginLeft:'5px',
        color: '#111',
        fontWeight: 'bold'
    }
}))

export default function Routers({ link,data }) {
    const style = useStyles()
    return (
        <>
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
            <Switch>
                {data.pages.map(page => {
                    return (
                        <Route key={page.id} path={`/${link}/${page.path}`} component={page.component} />
                    )
                }
                )
                }
            </Switch>
        </>
    )
}
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
    Grid,
    CardHeader,
    List,
    ListItemText,
    Checkbox,
    CardContent,
    Avatar,
    Slide,
} from '@material-ui/core'
import theme from '../theme'
import { CardOptions, EditIconButton } from './sub-components/Buttons'
import {  useState } from 'react'

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: '50px',
        backgroundColor: theme.palette.primary.dark,
        minWidth: '200px'
    },
    text: {
        color: 'white'
    },
    icon: {
        borderRadius: '100%',
        width: '50px',
        height: '50px',
    },
}))



export function HomeCard(props) {
    const style = useStyles
        ()
    return (

        <Card elevation={0} className={style.card}>
            <Grid alignItems="center" direction='row' justify='center' container spacing={4}>
                <Grid item md={3} xs={3} >
                    <div className={style.icon} style={{ backgroundColor: props.bgColor }}>{props.icon}</div>
                </Grid>

                <Grid item md={8} xs={8}>
                    <Typography className={style.text} style={{ marginTop: '6px' }} variant="h4">{props.number}</Typography>
                    <Typography className={style.text} style={{ marginBottom: '6px' }} variant="h6">{props.name}</Typography>
                </Grid>
            </Grid>
        </Card>

    )
}


export function CollectionCard({id}) {
    const [checked, setChecked] = useState(false)
    const [hover, setHover] = useState(false)
    return (
        <>
            <Card
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                id="card"
                style={checked ? { backgroundColor: '#f1f1f1', transition: '0.2s', cursor: "pointer" } : {cursor: "pointer"}}
            >
                <Grid container justify="space-between" alignItems="center" >
                    <Grid item >
                        <CardHeader
                            onClick={() => setChecked(!checked)}
                            title="Collection"
                            subheader="22 products"
                        />
                    </Grid>
                    {hover?
                        <Slide in={hover} direction="left" >
                            <Grid item >
                                <CardOptions id={id} />
                            </Grid>
                        </Slide>
                        :null
                    }
                </Grid>
                <CardContent
                    onClick={() => setChecked(!checked)}
                >
                    <List >
                        <ListItemText >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar />
                                <h3 style={{ marginLeft: '10px' }}>chose</h3>
                            </div>
                        </ListItemText>

                        <ListItemText >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar />
                                <h3 style={{ marginLeft: '10px' }}>chose</h3>
                            </div>
                        </ListItemText>

                        <ListItemText >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar />
                                <h3 style={{ marginLeft: '10px' }}>chose</h3>
                            </div>
                        </ListItemText>

                    </List>
                </CardContent>
            </Card>
        </>
    )
}
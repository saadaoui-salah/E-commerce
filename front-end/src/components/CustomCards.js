import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
    Grid,
    CardHeader,
    List,
    ListItemText,
    CardContent,
    Avatar,
    Slide,
} from '@material-ui/core'
import { CardOptions, EditIconButton } from './sub-components/Buttons'
import React from 'react'
import { DarkContext } from '../reducers/context'

export const HomeCard =  (props) => {
    const { state } = React.useContext(DarkContext)
    const useStyles = makeStyles((theme) => ({
        collectionCard:{
            backgroundColor: theme.palette.primary.main
        },
        MuiCardHeaderSubheader:{
            color:"#fff"
        },
        card: {
            borderRadius: 0,
            backgroundColor: state ? "#101b38" : "#fbfbfb",
            minWidth: '200px'
        },
        text: {
            color: state ? '#fff' : 'grey'
        },
        icon: {
            borderRadius: '100%',
            width: '50px',
            height: '50px',
        },
    }))
    const style = useStyles()
    
    return (
        <Card elevation={2} className={style.card}>
            <Grid alignItems="center" direction='row' justify='center' container>
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


export function CollectionCard({ id }) {
    const useStyles = makeStyles((theme) => ({
        collectionCard:{
            backgroundColor: theme.palette.primary.main
        },
    }))
    const style = useStyles()
    const [checked, setChecked] = React.useState(false)
    const [hover, setHover] = React.useState(false)
    return (
        <>
            <Card
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                id="card"
                className={style.collectionCard}
                style={checked ? { backgroundColor: '#2d3856', transition: '0.2s', cursor: "pointer" } : { cursor: "pointer" }}
            >
                <Grid container justify="space-between" alignItems="center" >
                    <Grid item >
                        <CardHeader
                            className={style.MuiCardHeaderSubheader}
                            onClick={() => setChecked(!checked)}
                            style={{color:"#fff"}}
                            title="Collection"
                            subheader="22 products"
                        />
                    </Grid>
                    {hover ?
                        <Slide in={hover} direction="left" >
                            <div style={{maxWidth:"80px"}}> 
                            <Grid item  >
                                <CardOptions id={id} />
                            </Grid>
                            </div>
                        </Slide>
                        : null
                    }
                </Grid>
                <CardContent
                    onClick={() => setChecked(!checked)}
                >
                    <List >
                        <ListItemText >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar />
                                <h3 style={{ marginLeft: '10px', color:"#fff" }}>chose</h3>
                            </div>
                        </ListItemText>
                        <ListItemText >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar />
                                <h3 style={{ marginLeft: '10px', color:"#fff" }}>chose</h3>
                            </div>
                        </ListItemText>
                        <ListItemText >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar />
                                <h3 style={{ marginLeft: '10px', color:"#fff" }}>chose</h3>
                            </div>
                        </ListItemText>

 
                    </List>
                </CardContent>
            </Card>
        </>
    )
}
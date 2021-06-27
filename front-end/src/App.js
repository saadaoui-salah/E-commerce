import { makeStyles } from '@material-ui/core/styles'
import { useMemo, useState, useContext, useCallback } from 'react'
import { routers } from './routers/routersData'
import clsx from 'clsx'
import {
  Avatar, ListItem, List,
  Switch as MuiSwitch,
  Paper, AppBar, Grid,
  Toolbar, Typography,
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link, Route, Switch,
} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { DarkContext } from './reducers/context'
import { setDark } from './reducers/actoins';
import { Provider } from './themes';

const drawerWidthOpen = 200
/* const primary = "#131b2f" */
/* const primary = "#101b38" */
/* const primary = "#f5f6ff" */

const Item = ({setActiveItem, activeItem, id, enName, icon, children }) => {
  const { state } = useContext(DarkContext)
  const useStyles = useCallback(makeStyles(()=>({
    active: {
      color: state ? "#0097ff" : '#1a73e8',
    },
    hover: {
      marginTop: '5px',
      padding: '5px 10px',
      transition: '0.2s all',
      borderRadius: '5px',
      '&:hover': {
        paddingLeft: '4px',
        backgroundColor: state ? "#0085ea57" : "#c0c0c0a6",
        cursor: 'pointer',
      }
    },
    textList: {
      marginLeft: '15px',
      marginRight: '5px',
      fontWeight: 'bold',
      color: state ? "#7bc3f5b5" : '#606060',
      userSelect: 'none',
    },
    navItem: {
      display: 'flex',
    },
  }))
  , [state])
  const style = useStyles()
  return (
    <ListItem
      onClick={() => { setActiveItem(id); }}
      className={
        clsx(style.hover, {
          [style.active]: activeItem === id,
        })}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className={style.navItem}>{icon}
          <Typography
            className={clsx(style.textList, {
              [style.active]: activeItem === id
            })}>
            {enName}
          </Typography>
        </div>
        <div >{children}</div>
      </div>
    </ListItem>
  )
}

const Sidebar = () => {
  const tablette = useMediaQuery('(max-width:900px)')
  const [activeItem, setActiveItem] = useState(1)
  const { state, dispatch } = useContext(DarkContext)
  const useStyles = useCallback(makeStyles(() => ({
    icon: {
      color: state ? "#7bc3f5b5" : '#606060',
      cursor: 'pointer',
    },
    drawerPaper: {
      height: '88vh',
      backgroundColor: state ? "#101b38" : "#fff",
      position:"fixed",
      zIndex: 1,
      width: `${drawerWidthOpen}px`
    },
  })))
  const style = useStyles()
  return (
    <Paper
    elevation={0}
    className={style.drawerPaper}
  >
    <Avatar style={{ marginTop: '30px', width: '70px', height: '70px' }} />
    <Typography
      style={{ 
        fontWeight: "bold", 
        color: state ? "#fff" : "#010101", 
        marginTop: "5px" 
      }} 
        variant="h6"
        >
          Salah Saadaoui
          </Typography>

    <MuiSwitch value={state} onChange={() => dispatch(setDark(!state))} />
    <List
      className={style.list}
      style={tablette ? {} : { marginTop: '45px' }}
    >
      {routers.items.map(item => {
        const active = item.id === activeItem
        return (
          <Link key={item.id} style={{ textDecoration: 'none' }} to={item.to}>
            <Item
              key={item.id}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              icon={item.icon(style, active)}
              id={item.id}
              enName={item.enName}
            />
          </Link>
        )
      })}
    </List>
  </Paper>
  )
}


function Navbar() {
  const { state } = useContext(DarkContext)
  const useStyles = useCallback(makeStyles(() => ({
    appBar: {
      zIndex: '30',
      transition: '0.3s',
      backgroundColor: state ? '#101b38' : '#fff'
    },
    container: {
      width: '100%',
      height: 'calc(100% - 90px)',
      margin: '90px 0px 0px 0px ',
      transition: '0.3s'
    },    
    arrowActive: {
      transform: 'rotateX(180deg)'
    },
    menuIcon: {
      color: state ? "#7bc3f5b5" : '#606060',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    active: {
      color: state ? "#0097ff" : '#1a73e8',
    },
    hover: {
      marginTop: '5px',
      padding: '5px 10px',
      transition: '0.2s all',
      borderRadius: '5px',
      '&:hover': {
        paddingLeft: '4px',
        backgroundColor: state ? "#0085ea57" : "#c0c0c0a6",
        cursor: 'pointer',
      }
    },
    hoverIcon: {
      marginTop: '5px',
      padding: '5px 10px',
      transition: '0.3s all',
      borderRadius: '5px',
      '&:hover': {
        transition: '0.5s',
        cursor: 'pointer',
      }
    },

  }
  )),[state])
  useMemo(() => {
    document.body.style.backgroundColor = state ? "#2c303a" : "#edf2f9"
  }, [state])
  const style = useStyles()
  return (
    <>
      <AppBar
        color="primary"
        style={{boxShadow: "0 4px 12px rgb(37 38 94 / 6%)"}}
        elevation={0}
        position='fixed'
        className={style.appBar}>
        <Toolbar
          style={{justifyContent: 'space-between'}}
        />
      </AppBar>
      <Router>
        <Grid container>
          <div style={{flex:1, marginLeft:"20px", marginTop:"80px"}}>
            <Sidebar />
          </div>
          <div style={{flex:6, marginRight:"20px", marginTop:"80px"}}>
            <Switch>
              {routers.pages.map(page => <Route exact={page.exact} path={page.path} component={page.component} />)}
            </Switch>
          </div>
        </Grid>
      </Router>
    </>
  )
}
function App() {

  return (
    <Provider>
      <Navbar />
    </Provider>)
}
export default App
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles'
import { useMemo, useState, useContext } from 'react'
import { routers } from './routers/routersData'
import clsx from 'clsx'
import {
  Avatar, ListItem, List,
  Switch as MuiSwitch,
  Drawer, AppBar, Slide, Icon,
  Toolbar, Typography, IconButton,
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


function Navbar() {
  const { state, dispatch } = useContext(DarkContext)
  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: '30',
      transition: '0.3s',
      backgroundColor: state ? '#101b38' : '#f8f8ff'
    },
    appBarClose: {
      zIndex: '30',
      width: '100%',
    },
    component: {
      display: 'flex',
      alignItems: 'center'
    },
    content: {
      display: 'contents',
    },
    container: {
      width: '100%',
      height: 'calc(100% - 90px)',
      margin: '90px 0px 0px 0px ',
      transition: '0.3s'
    },
    icon: {
      color: state ? "#7bc3f5b5" : '#606060' ,
      cursor: 'pointer',
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
        backgroundColor: state ? "#0085ea57": "#c0c0c0a6",
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
    navItem: {
      display: 'flex',
    },
    textList: {
      marginLeft: '15px',
      marginRight: '5px',
      fontWeight: 'bold',
      color: state ? "#7bc3f5b5" : '#606060',
      userSelect: 'none'
    },
    drawerPaper: {
      height: '100vh',
      backgroundColor: state ? "#101b38" : "#f8f8ff",
      zIndex: 1,
      alignItems: 'center',
    },
    drawerPaperOpen: {
      zIndex: 1,
      width: `${drawerWidthOpen}px`
    },
    leftIcon: {
      color: 'white',
      width: '35px',
      height: '35px',
    },
  }))
  useMemo(() =>{
    document.body.style.backgroundColor = state ? "#2c303a" : "#f1f1f1" 
  },[state])
  const tablette = useMediaQuery('(max-width:900px)')
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(1)
  const justifyCondition = (open, isOpen, isClose) => open ? { justifyContent: isOpen } : { justifyContent: isClose }
  useMemo(() => setOpen(true), [tablette])
  const style = useStyles()
  const Item = ({ id, enName, icon, children }) => {
    return (
      <ListItem
        onClick={() => { setActiveItem(id); setOpen(false) }}
        className={
          clsx(style.hover, {
            [style.active]: activeItem === id,
            [style.openActive]: activeItem === id,
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
  return (
    <>
      <AppBar
        color="primary"
        elevation={1}
        position='fixed'
        classes={{
          root: clsx(style.appBar, {
            [style.appBarClose]: open
          })
        }}>
        <Toolbar
          style={justifyCondition(open, 'flex-end', 'space-between')}
        >
          {open ?
            null
            :
            <IconButton
              style={{ marginLeft: '-20px' }}
              className={style.hoverIcon}
              onClick={() => setOpen(true)}
            >
              <Icon>
                <MenuOutlinedIcon className={style.menuIcon} />
              </Icon>
            </IconButton>
          }
        </Toolbar>
      </AppBar>
      <Router>
        <div className={style.component} style={justifyCondition(open, 'flex-end', 'center')}>
          <div className={style.side}>
            <Slide direction="right" in={open} timeout={300}>
              <div>
                <Drawer
                  color="primary"
                  elevation={0}
                  onClose={() => setOpen(false)}
                  open={open}
                  style={{ duration: '0.3s !important' }}
                  classes={{
                    paper: clsx(style.drawerPaper, {
                      [style.drawerPaperOpen]: open,
                      [style.drawerPaperClose]: !open
                    }),
                  }}
                  anchor="left"
                >
                  <IconButton
                    style={{ marginTop: '10px' }}
                    className={style.hoverIcon}
                    onClick={() => setOpen(false)}
                  >
                    <Icon>
                      <ChevronLeftIcon className={style.icon} />
                    </Icon>
                  </IconButton>
                  <Avatar style={{ marginTop: '20px', width: '70px', height: '70px' }} />
                  <Typography style={{ color: "#fff", marginTop: "5px" }} variant="h6">Salah Saadaoui</Typography>
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
                            icon={item.icon(style, active)}
                            id={item.id}
                            enName={item.enName}
                          />
                        </Link>
                      )
                    })}
                  </List>
                </Drawer>
              </div>
            </Slide>
          </div>
          <div className={style.content} >
            <div className={style.container}
              style={open ? {
                margin: `80px 20px 0px ${tablette ? '0px' : drawerWidthOpen + 20}px `
              } : { margin: '80px 20px 0px 20px' }}
            >
              <Switch>
                {routers.pages.map(page => <Route key={page.id} exact={page.exact} path={page.path} component={page.component} />)}
              </Switch>
            </div>
          </div>
        </div>
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
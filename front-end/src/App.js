import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles'
import { useMemo, useState } from 'react'
import {routers} from './routers/routersData'
import clsx from 'clsx'
import {
  Avatar,
  ListItem,
  List,
  Drawer,
  AppBar,
  Icon,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import theme from './theme'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const drawerWidthOpen = 200
/* const primary = "#131b2f" */
/* const primary = "#101b38" */
/* const primary = "#f5f6ff" */
const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    zIndex: '30',
    transition: '0.3s'
  },
  appBarClose: {
    zIndex: '30',
    width: `calc(100% - ${drawerWidthOpen}px)`,
    transition: '0.3s !important'
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
    color: 'rgb(123 195 245 / 71%)',
    cursor: 'pointer',
  },
  arrowActive: {
    transform: 'rotateX(180deg)'
  },
  menuIcon: {
    color: 'rgb(0 151 255) !important',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  active: {
    color: 'rgb(0 151 255) !important',
  },
  hover: {
    marginTop: '5px',
    padding: '5px 10px',
    transition: '0.2s all',
    borderRadius: '5px',
    '&:hover': {
      paddingLeft:'4px',
      backgroundColor: '#0085ea57',
      cursor: 'pointer',
    }
  },
  hoverIcon: {
    marginTop: '5px',
    padding: '5px 10px',
    transition: '0.3s all',
    borderRadius: '5px',
    '&:hover': {
      transition:'0.5s',
      backgroundColor: '#0085ea57',
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
    color: 'rgb(123 195 245 / 71%)',
    userSelect: 'none'
  },
  drawerPaper: {
    height: '100vh',
    backgroundColor: theme.palette.primary.dark,
    zIndex: '1',
    alignItems: 'center',
  },
  drawerPaperClose: {
    transition: '0.3s !important',
    width: '0px',
  },
  drawerPaperOpen: {
    zIndex: 1,
    transition: '0.3s !important',
    width: `${drawerWidthOpen}px`
  },
  leftIcon: {
    color: 'white',
    width: '35px',
    height: '35px',
  },
}))




function App() {
  const tablette = useMediaQuery('(max-width:900px)')
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(1)  
  const justifyCondition = (open, isOpen, isClose) => open ? { justifyContent: isOpen } : { justifyContent: isClose }
  useMemo(() => setOpen(true), [tablette])
  const style = useStyles()
  const Item = ({ id, enName, icon, children }) => {
    return (
      <ListItem
        onClick={() => setActiveItem(id)}
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
          elevation={0}
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
            <Avatar style={{ marginRight: '-10px' }} />
          </Toolbar>
        </AppBar>
        <Router>
          <div className={style.component} style={justifyCondition(open, 'flex-end', 'center')}>
            <div className={style.side}>
              <Drawer
                elevation={0}
                variant="persistent"
                open={true}
                classes={{
                  paper: clsx(style.drawerPaper, {
                    [style.drawerPaperOpen]: open,
                    [style.drawerPaperClose]: !open
                  })
                }}
                anchor="left"
              >
                {tablette ?
                  <IconButton
                    style={{ marginTop: '10px' }}
                    className={style.hoverIcon}
                    onClick={() => setOpen(false)}
                  >
                    <Icon>
                      <ChevronLeftIcon className={style.icon} />
                    </Icon>
                  </IconButton>
                  : null
                }
                <List className={style.list} style={tablette ? null : { marginTop: '45px' }}
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
            <div className={style.content} >
              <div className={style.container}
                style={open ? {
                  margin: `90px 20px 0px ${drawerWidthOpen + 20}px `
                } : { margin: '90px 20px 0px 20px' }}
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
export default App
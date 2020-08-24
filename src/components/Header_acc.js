import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';
// import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";
import Orders from "./Orders";
import Accepted from "./Accepted";
import Rejected from "./Rejected";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  
  const classes = useStyles();
  let history = useHistory()

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

//   function start(){
//     var container = document.getElementById('page');
//     container.innerHTML=`
//     <Link 
//       href= "/orders"></Link>`;
//   }

//  function page(page_name){
//     if(page_name === "order")
//     {
//      return(<div>
//        <Orders />
//      </div>)
      
//     }
//     else if(page_name === "accepted")
//     {
//       return(<div>
//         <Accepted />
//       </div>)
      
//     }
//     else if(page_name === "rejected")
//     {
//       var contain = document.getElementById('page');
//       contain.innerHTML=`<Link 
//       href= "/rejected"></Link>`;
      
//     }
//     else{
//       var co = document.getElementById('page');
//       co.innerHTML=`<Link 
//       href= "/orders"></Link>`;
      
//     }
    

//   }

  return (
    <div className={classes.root}>
     
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            GROC
          </Typography>
          <IconButton color="inherit">

            <AccountCircleOutlinedIcon fontSize="large" />

          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            href = "./"
            color="inherit"
            
          >
            Logout
                        </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
        </div>
              <Divider />
        <div>
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon href="/Header" />
            </ListItemIcon>
            <Link href="/Header" variant="body2">
              <ListItemText  primary="MY ORDERS" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <Link  href="/Header_acc" variant="body2">
            <ListItemText primary="Accepted" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <Link href="/Header_rej" variant="body2">
            <ListItemText primary="Rejected" />
            </Link>
          </ListItem>
          
        </div>
        </Drawer>
        
        
         <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container} id="page">
          <Accepted />
        </Container>
      </main> 

      </div>
        
        


          
  );      
}     
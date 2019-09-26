import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';

// Material-UI 
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';



//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';

//Boostrap
import NaviBar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';



const drawerWidth = 240;

const styles = (theme) => ({
    ...theme.spreadThis,
    root: {
        display: 'flex',
        zIndex: 1,
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1,  
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: { 
            display: 'block',
            paddingLeft: '100px',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          paddingRight: '100px',
        },
    },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    navButton:{
        padding: '0 1px',
    },
    dropDown:{
        backgroundColor: 'transparent',
        borderRadius: '100%',
        '&:hover': {
            backgroundColor: 'transparent',
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            }
    }
}
});



class Navbar extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment> 
            <div className={classes.root}>
            
                <AppBar elevation={0} position="absolute" className="classes.appBar" color="#fff"> 
                    <Toolbar disableGutters="true" classes={{root: classes.toolbar}}>
                            <Typography className={classes.title} variant="h6" noWrap>
                                            Sillicon Valley Tour
                            </Typography>
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>

                            <Button 
                                color="inherit" 
                                variant="text" 
                                size="large"
                                style={{ backgroundColor: 'transparent' }}
                                component={Link} 
                                to="/">Home</Button>
                           
    
                            <Button 
                                // classes={{root: classes.navButton}}
                                color="inherit"
                                variant="text"
                                style={{ backgroundColor: 'transparent'}}
                                size="large"
                                component={Link}
                                to="/tours">Tours</Button>

                            <Button 
                                color="inherit"
                                variant="text"
                                style={{ backgroundColor: 'transparent' }}
                                size="large"
                                component={Link}
                                to="/about">About</Button>
                            
                            
                            <Button 
                                color="inherit" 
                                variant="text" 
                                style={{ backgroundColor: 'transparent' }}
                                component={Link} 
                                size="large"
                                to="/contact">Contact Us</Button>
                               </div>
                           
                        </Toolbar>
                </AppBar>
            </div>
        </Fragment>
                   
                
               
        );
    }
}


export default withStyles(styles)(Navbar);

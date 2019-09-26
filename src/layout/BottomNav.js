
import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';

//MUI
import BottomNavigation from '@material-ui/core/BottomNavigation';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

//Icons
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
    ...theme.spreadThis,
    root: {
        display: 'flex',
        zIndex: 1,
    },
    bottomNav:{
        height: '10px',
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        bottom: 0,
    },
    stickToBottom: {
        bottom: 0,
      },
    toolbar:{
        width: '100%',
        minHeight: '40px',
        bottom: 0,
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
        //   paddingRight: '100px',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
});

class BottomNav extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment> 
                
            <div className={classes.root}>
                <Divider />
                <BottomNavigation classes={{root: classes.bottomNav}}>
                    <Toolbar classes={{root: classes.toolbar}}>
                    <Typography className="classes.title">hello </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                    <Typography>hello </Typography>
                    <Typography>hello </Typography>
                    <Typography>hello </Typography>
                    </div>

                    </Toolbar>
                   
                    </BottomNavigation>
                </div>
            
               
                           
        </Fragment>
                   
                
               
        );
    }
}


export default withStyles(styles)(BottomNav);
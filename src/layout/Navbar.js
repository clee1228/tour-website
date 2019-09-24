import React, { Component, Fragment } from './node_modules/react'
import {Link} from './node_modules/react-router-dom';

// Material-UI 
import withStyles from './node_modules/@material-ui/core/styles/withStyles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Typography from './node_modules/@material-ui/core/Typography';
import Button from './node_modules/@material-ui/core/Button';


const styles = (theme) => ({});


class Navbar extends Component {
    render() {
        return (
            <Fragment> 
            <div className={classes.root}>
                <AppBar position="absolute" className="classes.appBar" color="#fff"> 
                    <Toolbar className="nav-container">

                            <Typography className={classes.title} variant="h6" noWrap>
                                            Sillicon Valley Tour
                            </Typography>

                           
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/signup">Signup</Button>
                       

    
                        
                                {/* <Link to="/">
                                    <Typography>
                                        Home
                                    </Typography>
                                </Link> */}

                                {/* <Tooltip
                                    placement="top"
                                    title="Messages">

                                    <IconButton color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <ChatIcon className={classes.chatIcon}/>
                                        </Badge>
                                    </IconButton>
                                </Tooltip> */}
                                        
                             
                       
                        </Toolbar>
                </AppBar>
            </div>
        </Fragment>
                   
                
               
        );
    }
}


export default withStyles(styles)(Navbar);

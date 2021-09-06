import React from 'react'
import { AppBar,Toolbar,IconButton,
Menu, Typography,Badge} from '@material-ui/core'
import {  ShoppingCart,} from '@material-ui/icons'
import logo from '../../assets/launch_background.png';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom'
import HouseIcon from '@material-ui/icons/House';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    

    return (
             <div>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
             <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                <img src={logo} alt="commerce.js" height="25px" className={classes.image} />My Ecommerce
                </Typography>
                
                <div className={classes.grow} />
                <IconButton component={Link} className={classes.red} to="/" aria-label="Show cart items" color="primary">
                     <HouseIcon/>
                </IconButton>
                    { location.pathname === '/' &&(
                <div className={classes.button}>
                    {/* home button */}
               
                    <IconButton component={Link} className={classes.blue} to="/cart" aria-label="Show cart items" color="primary">
                    <Badge badgeContent={totalItems} color="primary">
                        <ShoppingCart />
                    </Badge>
                    </IconButton>
                    
                </div>)}
         
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar

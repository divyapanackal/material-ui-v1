import { AppBar, Grid, Toolbar, Typography, } from '@material-ui/core';
import React from 'react';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Grid  container direction="row" justify="space-between" alignItems="center" >
                <Typography> Divya Panackal</Typography>
                <IconButton >
                    <MenuIcon />
                </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
import { Grid } from '@material-ui/core';
import React from 'react';
import CofeeCard from './CofeeCard';
import cofeeMakerList from './constants';


const Content = () => {
    const getCofeeCard = (cofeeObj) => {
        const { title, subtitle, description, imgSrc } = cofeeObj
            return (
                <Grid item xs={12} sm={4}>
                    <CofeeCard {...cofeeObj} />
                </Grid>
            )
    }
    
    return (
        <Grid container spacing={4} >
            <Grid item xs={12}>
            <h2>Items</h2>
        </Grid>
            {cofeeMakerList.map(cofeeObj => getCofeeCard(cofeeObj))}
        </Grid>
        )
};

export default Content;
import React from 'react';
import { Grid } from '@material-ui/core';
import Painting from '../Painting';

const Artwork: React.FC = () => {
    const paintings = [
        {
            img: 'blue',
            title: "Blue Painting",
            cost: 100.00,
            size: "24in x 22 in",
            description: "This is a blue painting"
        },
        {
            img: 'red',
            title: "Red Painting"
        }
    ]

    return (
        <>
        <Grid container spacing={4}>
            {paintings.map((p, i) => {
                const obj = p;
                return (
                    <Grid item xs={12} sm={6}>
                        <Painting props={obj} />
                    </Grid>
                );
            })}
        </Grid>
        </>
    );
}

export default Artwork;

import React from 'react';
import { Grid } from '@material-ui/core';
import Painting from '../Painting';

const Artwork: React.FC = () => {
    const paintings = [
        {
            img: 'blue',
        },
        {
            img: 'red',
        },
        {
            img: 'black',
        },
        {
            img: 'orange',
        }
    ]

    return (
        <>
        <Grid container spacing={4}>
            {paintings.map((p, i) => {
                const { img } = p;
                return (
                    <Grid item xs={12} sm={6}>
                        <Painting props={img} />
                    </Grid>
                );
            })}
        </Grid>
        </>
    );
}

export default Artwork;

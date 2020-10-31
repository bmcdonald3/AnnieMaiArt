import { Typography, Grid, List, ListItem, createStyles, makeStyles, Theme, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    test: {
        width: '100%',
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    f1: {
        fontFamily: 'Great Vibes'
    },
    f2: {
        fontFamily: 'Playfair Display SC'
    }
  }),
);

const Sidebar2: React.FC = () => {
    const classes = useStyles();

    const itemList = [
        {
            text: "paintings"
        },
        {
            text: "about"
        },
        {
            text: "contact"
        },
        {
            text: "instagram"
        }
    ];

    return (
        <>
        <Grid container spacing={1}>
            <Grid item sm={11}>
                <Typography variant="h3" align="center" className={classes.f1}>
                    Annie Mai
                </Typography>
                <Typography variant="h3" align="center" className={classes.f2}>
                    ART
                </Typography>
            </Grid>
            <Grid item sm={1} />
        </Grid>
        <List>
            {itemList.map((item, index) => {
                const { text } = item;
                return (
                    <Link to={text==='paintings' ? '/' : `/${text}`} className={classes.link}>
                    <ListItem button key={text}>
                    <ListItemText primary={text} />
                    </ListItem>
                    </Link>
                );
            })}
        </List>
        </>
    );
}

export default Sidebar2;
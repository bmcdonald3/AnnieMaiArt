import { Typography } from '@material-ui/core';
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'
import blue from '../../pictures/blue.jpg'
import red from '../../pictures/ash.png'

interface Props {
    props: any
}

const Painting: React.FC<Props> = (asd) => {
    const { props } = asd;
    return (
        <>
            <Link to={{
                pathname:'/paint1',
                state: {
                    props
                }
                }}>
            <img src={props.img==='blue' ? blue : red} alt="blue" />
            <Typography align='center'>
                {props.title}
            </Typography>
            </Link>
        </>
    );
}

export default Painting;
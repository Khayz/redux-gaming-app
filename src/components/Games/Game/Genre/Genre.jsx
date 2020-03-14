import React from 'react';
import classes from './Genre.module.css';

const Genre = props => {
	return <p className={classes.genre}>{props.genre.name}</p>;
};

export default Genre;

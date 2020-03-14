import React from 'react';

import classes from './Button.module.css';

const Button = props => {
	let button = null;
	if (props.clicked) {
		button = (
			<button onClick={props.clicked} className={classes.Button}>
				{props.children}
			</button>
		);
	} else {
		button = <button className={classes.Button}>{props.children}</button>;
	}

	return button;
};

export default Button;

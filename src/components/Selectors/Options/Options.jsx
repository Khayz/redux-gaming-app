import React from 'react';

import classes from './Options.module.css';

const Options = props => (
	<option className={classes.Option}>{props.values}</option>
);

export default Options;

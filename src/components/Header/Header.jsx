import React from 'react';
import { connect } from 'react-redux';

import classes from './Header.module.css';

const Header = props => {
	return (
		<div className={classes.Header}>
			<h1>{props.actualType}</h1>
			<h4>Based on player counts and release-date</h4>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		actualType: state.actualType
	};
};

export default connect(mapStateToProps, null)(Header);

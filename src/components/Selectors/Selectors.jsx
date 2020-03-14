import React from 'react';
import { connect } from 'react-redux';
import classes from './Selectors.module.css';

import Options from './Options/Options';

const Selectors = props => {
	return (
		<div className={classes.Selectors}>
			<select onChange={event => props.onSelectUrl(event.target.value)}>
				<Options values={'Trending Games 2020'} />
				<Options values={'Trending Games 2019'} />
				<Options values={'Highest Rated Games for 2001'} />
				<Options values={'Trending Animes'} />
			</select>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onSelectUrl: type => dispatch({ type: type })
	};
};

export default connect(null, mapDispatchToProps)(Selectors);

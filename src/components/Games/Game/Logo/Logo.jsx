import React from 'react';
import classes from './Logo.module.css';

const Logo = props => {
	const gamePlatforms = props.platforms.map(platform => {
		switch (platform.platform.name) {
			case 'PC':
				return <i key={Math.random() * 1000} className='fab fa-steam'></i>;

			case 'PlayStation 4':
				return (
					<i key={Math.random() * 1000} className='fab fa-playstation'></i>
				);

			case 'Xbox One':
				return <i key={Math.random() * 1000} className='fab fa-xbox'></i>;

			case 'Nintendo Switch':
				return <i key={Math.random() * 1000} className='fas fa-gamepad'></i>;

			default:
				return false;
		}
	});

	return <div className={classes.LogoList}>{gamePlatforms}</div>;
};

export default Logo;

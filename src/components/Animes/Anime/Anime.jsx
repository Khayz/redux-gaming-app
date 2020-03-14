import React from 'react';

import classes from './Anime.module.css';

const Anime = ({ anime }) => {
	return (
		<div className={classes.Anime}>
			<div
				className={classes.AnimeImage}
				style={{
					backgroundImage: `url('${anime.image_url}')`
				}}>
				<div></div>
			</div>
			<div className={classes.AnimeInfo}>
				<h3>{anime.type}</h3>
				<h1>{anime.title}</h1>
			</div>
		</div>
	);
};

export default Anime;

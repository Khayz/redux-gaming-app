import React from 'react';

import classes from './Game.module.css';

import Logo from './Logo/Logo';
import Genre from './Genre/Genre';

const Game = ({ game, platforms }) => {
	let genres = null;
	if (game.genres) {
		genres = (
			<div className={classes.genresList}>
				{game.genres.map(genre => {
					return <Genre key={genre.id} genre={genre} />;
				})}
			</div>
		);
	}

	return (
		<div className={classes.Game}>
			<div
				className={classes.gameImage}
				style={{
					backgroundImage: `url('${game.background_image}')`
				}}></div>
			<div className={classes.gameInfo}>
				<Logo id={game.id} platforms={platforms} />
				<h1>{game.name}</h1>
				<div className={classes.extraInfo}>
					<div className={classes.releaseData}>
						<p style={{ color: '#ccc' }}>Release Date:</p>
						<p className={classes.gameRelease}>{game.released}</p>
					</div>
					<div className={classes.genres}>
						<p style={{ color: '#ccc' }}>Genres: </p>
						{genres}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;

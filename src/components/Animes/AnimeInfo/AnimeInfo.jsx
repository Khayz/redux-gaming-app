import React from 'react';

import classes from './AnimeInfo.module.css';

import Anime from '../Anime/Anime';
import Spinner from '../../UI/Spinner/Spinner';

const AnimeInfo = props => {
	let ListAnimes = null;
	if (props.animes.length >= 1 && !props.loading) {
		ListAnimes = props.animes.map(anime => (
			<Anime key={anime.mal_id} anime={anime} />
		));
	} else {
		ListAnimes = <Spinner />;
	}

	return (
		<section>
			<div className={classes.AnimeList}>{ListAnimes}</div>
		</section>
	);
};

export default AnimeInfo;

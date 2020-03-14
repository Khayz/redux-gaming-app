import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import classes from './Animes.module.css';

import * as actionTypes from '../../store/actions/actionTypes';
import Button from '../UI/Button/Button';
import AnimeInfo from './AnimeInfo/AnimeInfo';

const Animes = props => {
	const [animes, setAnimes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [findAnime, setFindAnime] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(props.url)
			.then(response => response.json())
			.then(data => {
				setAnimes(data.results.filter((item, index) => index <= 19));
				setError(false);
				setLoading(false);
			})
			.catch(error => {
				setError(true);
				setLoading(false);
			});
	}, [props.url]);

	const changeAnimeHandler = event => {
		event.preventDefault();
		if (findAnime.length > 4) {
			const animeName = findAnime
				.toLowerCase()
				.split(' ')
				.join('/');
			const url = `https://api.jikan.moe/v3/search/anime?q=${animeName}&page=1`;
			if (url !== props.url) {
				props.onChangeAnime(url);
				setLoading(true);
			}
		}
	};

	console.log(animes);

	return (
		<div>
			<form className={classes.Form} onSubmit={changeAnimeHandler}>
				<input
					onChange={event => setFindAnime(event.target.value)}
					value={findAnime}
					className={classes.SearchAnime}
					type='text'
					placeholder='Search'
				/>
				<Button>Search</Button>
			</form>
			<h1 style={{ fontWeight: 'normal', color: '#fff' }}>
				{findAnime.toUpperCase()}
			</h1>
			{error ? (
				<h1>Insert a valid anime name</h1>
			) : (
				<AnimeInfo animes={animes} loading={loading} />
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		url: state.url
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onChangeAnime: url =>
			dispatch({ type: actionTypes.SET_TRENDING_ANIMES, url: url })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Animes);

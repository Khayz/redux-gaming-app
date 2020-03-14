import * as actionTypes from '../actions/actionTypes';

const initialState = {
	actualType: actionTypes.SET_TRENDING_GAMES_2020,
	url:
		'https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added'
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_TRENDING_GAMES_2020:
			return {
				...state,
				actualType: actionTypes.SET_TRENDING_GAMES_2020,
				url:
					'https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added'
			};

		case actionTypes.SET_TRENDING_GAMES_2019:
			return {
				...state,
				actualType: actionTypes.SET_TRENDING_GAMES_2019,
				url:
					'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added'
			};

		case actionTypes.SET_HIGHEST_GAMES_2001:
			return {
				...state,
				actualType: actionTypes.SET_HIGHEST_GAMES_2001,
				url:
					'https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating'
			};

		case actionTypes.TRENDING_ANIMES:
			return {
				...state,
				actualType: actionTypes.TRENDING_ANIMES,
				url: 'https://api.jikan.moe/v3/search/anime?q=naruto/shippuden&page=1'
			};

		case actionTypes.SET_TRENDING_ANIMES:
			return {
				...state,
				actualType: actionTypes.TRENDING_ANIMES,
				url: action.url
			};

		default:
			return state;
	}
};

export default reducer;

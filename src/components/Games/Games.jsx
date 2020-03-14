import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Games.module.css';

import Spinner from '../UI/Spinner/Spinner';
import Game from './Game/Game';
import Button from '../UI/Button/Button';

class Games extends Component {
	state = {
		games: [],
		next: null,
		previous: null,
		loading: true
	};

	componentDidMount() {
		this.fetchData(this.props.url);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.url !== this.props.url) {
			this.setState({
				games: [],
				next: null,
				previous: null,
				loading: true
			});
			fetch(this.props.url)
				.then(response => response.json())
				.then(data => {
					this.setState({
						games: data.results,
						next: data.next,
						previous: data.previous,
						loading: false
					});
				});
		}
	}

	fetchData = URL => {
		fetch(URL)
			.then(response => response.json())
			.then(data => {
				this.setState(prevState => ({
					games: [...prevState.games, ...data.results],
					next: data.next,
					previous: data.previous,
					loading: false
				}));
			});
	};

	getDataHandler = URL => {
		this.setState({
			loading: true
		});

		fetch(URL)
			.then(response => response.json())
			.then(data => {
				this.setState(prevState => ({
					games: [...prevState.games, ...data.results],
					next: data.next,
					previous: data.previous,
					loading: false
				}));
			});
	};

	render() {
		let games = null;
		if (this.state.games.length >= 20) {
			games = this.state.games.map(game => (
				<Game platforms={game.platforms} key={game.id} game={game} />
			));
		} else {
			games = <Spinner />;
		}

		let button = null;
		if (!this.state.loading) {
			button = (
				<Button
					className={classes.Button}
					clicked={() => this.getDataHandler(this.state.next)}>
					Load More
				</Button>
			);
		} else if (this.state.games.length >= 20) {
			button = <Spinner />;
		}

		return (
			<section>
				<div className={classes.gameList}>{games}</div>
				{button}
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		url: state.url
	};
};

export default connect(mapStateToProps, null)(Games);

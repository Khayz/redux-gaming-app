import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Header from '../components/Header/Header';
import Selectors from '../components/Selectors/Selectors';
import Games from '../components/Games/Games';
import Animes from '../components/Animes/Animes';
import * as actionTypes from '../store/actions/actionTypes';

class App extends Component {
	render() {
		let renderComponent = <Games />;
		if (
			this.props.type === actionTypes.TRENDING_ANIMES ||
			this.props.type === actionTypes.SET_TRENDING_ANIMES
		) {
			renderComponent = <Animes />;
		}

		return (
			<div className='App'>
				<main>
					<Header />
					<Selectors />
					{renderComponent}
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		type: state.actualType
	};
};

export default connect(mapStateToProps, null)(App);

import React, { Component } from 'react';
import styled from 'styled-components';
import Timetale from './Timetable';
import Display from './Display';
import Edit from './Edit';

const MainScreen = styled.div`
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-columns: 3fr 1fr;

	/* Ultra wide */
	@media screen and (min-width: 1920px) {
		width: 1920px;
		margin-right: auto;
		margin-left: auto;
	}

	/* Half-desktop */
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
	}

	/* Mobile */
	@media screen and (max-width: 850px) {
		grid-template-columns: 1fr;
	}
`;

export default class App extends Component {
	state = {
		edit: false,
		editingInterval: ''
	}

	editInterval = intervalId => {
		this.setState({ 
			edit: true,
			editingInterval: intervalId
		});
	}

	closeEditMenu = () => {
		this.setState({ 
			edit: false,
			editingInterval: ''
		});
	}

	render() {
		return (
			<>
				<MainScreen>
					<Timetale editInterval={this.editInterval}/>
					{/* Hiding the display menu if editing on a phone */}
					{!(this.state.edit && window.screen.width <= 1000) && <Display/>}
				</MainScreen>
				<Edit 
					active={this.state.edit}
					closeEditMenu={this.closeEditMenu}	
				/>
			</>
		)
	}
}
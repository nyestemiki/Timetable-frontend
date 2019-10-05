import React, { Component } from 'react';
import MainScreen from './styles/AppStyles';
import Timetale from './Timetable';
import Display from './Display';
import Edit from './Edit';

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
					{!(this.state.edit && window.innerWidth <= 1000) && <Display/>}
				</MainScreen>
				<Edit 
					active={this.state.edit}
					closeEditMenu={this.closeEditMenu}	
				/>
			</>
		)
	}
}
import React, { Component } from 'react';
import IntervalStyle, { Edit, IntervalDiv } from './styles/IntervalStyles';

export default class Interval extends Component {
    state = {
        editMode: false
    }

    // Shows the edit option for the selected interval
    showEdit = () => {
        this.setState({ editMode: true });
    }

    // Displays interval's event, whilst hides the edit option 
    closeEdit = () => {
        this.setState({ editMode: false });
    }

    // Open edit window for editing the selected interval
    edit = () => {
        this.props.editInterval(this.props.id);
    }

    handleClick = event => {
        // If not the selected interval clicked, then close the edit menu
        if (parseInt((event.target).id) !== this.props.id) {
            this.setState({ editMode: false });
        }
    }

    componentDidMount() {
        // Listen for clicks (=> check which interval was clicked)
        document.addEventListener('click', this.handleClick);
    }

    render() {
        return (
            <IntervalStyle onClick={this.showEdit}>
                {/* Edit mode active */}
                {this.state.editMode && (
                    <Edit onClick={this.edit}>Edit</Edit>
                )}

                {/* Edit mode inactive */}
                {!this.state.editMode && (
                    <IntervalDiv id={this.props.id}></IntervalDiv>
                )}
            </IntervalStyle>
        )
    }
}

import React, { Component } from 'react';
import EditStyle, { MiddleWrapper, X } from './styles/EditStyles';
import EditContainer from './EditContainer';

export default class Edit extends Component {
    render() {
        return (
            this.props.active && (
            <EditStyle>
                <X onClick={this.props.closeEditMenu}>X</X>
                <MiddleWrapper>
                    <EditContainer/>
                </MiddleWrapper>
            </EditStyle>)
        )
    }
}
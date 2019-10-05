import React, { Component } from 'react';
import EditStyle, { MiddleWrapper, X } from './styles/EditStyles';
import Display from './Display';

export default class Edit extends Component {
    render() {
        return (
            this.props.active && (
            <EditStyle>
                <X onClick={this.props.closeEditMenu}>X</X>
                <MiddleWrapper>
                    <Display/>
                </MiddleWrapper>
            </EditStyle>)
        )
    }
}
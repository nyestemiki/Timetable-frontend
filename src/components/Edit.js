import React, { Component } from 'react';
import EditStyle, { MiddleWrapper } from './styles/EditStyles';
import Display from './Display';

export default class Edit extends Component {
    render() {
        return (
            this.props.active && (
            <EditStyle>
                <MiddleWrapper>
                    <Display/>
                </MiddleWrapper>
            </EditStyle>)
        )
    }
}
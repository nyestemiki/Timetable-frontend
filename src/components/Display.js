import React, { Component } from 'react';
import styled from 'styled-components';

const DisplayStyle = styled.div`
    /* DEV  */
    border: 1px solid red;
    background: red;
    
    margin: 40px;
    border-radius: 100px;
`;

export default class Display extends Component {
    render() {
        return (
            <DisplayStyle>
                
            </DisplayStyle>
        )
    }
}
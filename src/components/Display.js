import React, { Component } from 'react';
import DisplayStyle, { DisplayStyleContainer, Area, AreaTitle, Buttons, Button, ButtonAbsence, Options } from './styles/DisplayStyles';

export default class Display extends Component {
    render() {
        return (
            <DisplayStyle>
                <DisplayStyleContainer>
                    <Area>
                        <AreaTitle>Show</AreaTitle>
                        <Buttons>
                            <Button>All</Button>
                            <Button>Compulsary</Button>
                        </Buttons>
                    </Area>
                    <Area>
                        <AreaTitle>Week</AreaTitle>
                        <Buttons>
                            <Button>Odd</Button>
                            <Button>Even</Button>
                        </Buttons>
                    </Area>
                    <Area>
                        <AreaTitle>Type</AreaTitle>
                        <Buttons>
                            <Button>Course</Button>
                            <Button>Seminar</Button>
                            <Button>Lab</Button>
                        </Buttons>
                    </Area>
                    <Area>
                        <AreaTitle>Zone</AreaTitle>
                        <Options>All zones</Options>
                    </Area>
                    <Area>
                        <AreaTitle>Classroom</AreaTitle>
                        <Options>All classrooms</Options>
                    </Area>
                </DisplayStyleContainer>
                <Area>
                    <ButtonAbsence>+ Absence</ButtonAbsence>
                </Area>
            </DisplayStyle>
        )
    }
}
import React, { Component } from 'react';
import EditContainerStyle, { EditContainerStyleContainer, Area, AreaTitle, TextInput, Buttons, Button, Delete, Save } from './styles/EditContainerStyles';

export default class EditContainer extends Component {
    render() {
        return (
            <EditContainerStyle>
                <EditContainerStyleContainer>
                    <Area>
                        <AreaTitle>Course Title</AreaTitle>
                        <TextInput/>
                    </Area>
                    <Area>
                        <AreaTitle>Week</AreaTitle>
                        <Buttons>
                            <Button>Weekly</Button>
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
                        <TextInput/>
                    </Area>
                    <Area>
                        <AreaTitle>Classroom</AreaTitle>
                        <TextInput/>
                    </Area>
                </EditContainerStyleContainer>
                <Area>
                    <Buttons>
                        <Delete>Delete</Delete>
                        <Button>Save</Button>
                    </Buttons>
                </Area>
            </EditContainerStyle>
        )
    }
}
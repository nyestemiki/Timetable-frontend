import React, { Component } from 'react';
import TimetableStyle, { TableHeader, TableTimes, TableContent } from './styles/TimetableStyles';
import Interval from './Interval';

export default class Timetable extends Component {
    render() {
        let intervals = [];
        for (let d = 0; d < 30; d++) {
            intervals.push(<Interval 
                key={d}
                id={d}
                editInterval={this.props.editInterval}    
            ></Interval>);
        }

        return (
            <TimetableStyle>
                <TableHeader>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                </TableHeader>
                <TableTimes>
                    <div>8-10</div>
                    <div>10-12</div>
                    <div>12-2</div>
                    <div>2-4</div>
                    <div>4-6</div>
                    <div>6-8</div>
                </TableTimes>
                <TableContent>
                    {intervals.map(interval => interval)}
                </TableContent>
            </TimetableStyle>
        )
    }
}
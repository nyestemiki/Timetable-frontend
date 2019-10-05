import React, { Component } from 'react';
import TimetableStyle, { TableHeader, TableTimes, TableContent } from './styles/TimetableStyles';

export default class Timetable extends Component {
    render() {
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
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </TableContent>
            </TimetableStyle>
        )
    }
}
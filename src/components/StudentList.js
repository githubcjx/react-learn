import React, { Component } from 'react';
import Student from './Student';

export default class StudentList extends Component {
    render() {
        const stus = this.props.student.map(item => <Student key={item.id} {...item}></Student>)
        return (
            <ul>
                {stus}
            </ul>
        )
    }
}

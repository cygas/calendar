import React, {Component} from 'react';
import {months} from "./utils";

export default class Header extends Component {
    render() {
        return (
            <div className='table-header'>
                <div>{months[this.props.month]} {this.props.year}</div>
                <div className='arrow-container'>
                    <i className="fas fa-angle-up" data-action="up" onClick={this.props.changeMonth}></i>
                    <i className="fas fa-angle-down" data-action="down" onClick={this.props.changeMonth}></i>
                </div>
            </div>
        )
    }
}
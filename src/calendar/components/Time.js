import React, {Component} from 'react';

const day = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
    monthsChanged = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

export default class Time extends Component {
    render() {
        const hour = this.props.date.getHours() < 10 ? `0${this.props.date.getHours()}` : this.props.date.getHours(),
            minute= this.props.date.getMinutes() < 10 ? `0${this.props.date.getMinutes()}` : this.props.date.getMinutes(),
            second = this.props.date.getSeconds() < 10 ? `0${this.props.date.getSeconds()}` : this.props.date.getSeconds();
        return (
            <div className='time-container'>
                <div>{hour}:{minute}:{second}</div>
                <div className="time-date" onClick={this.props.backToCurrentMonth}>
                    <div>{day[this.props.date.getDay()]}</div>
                    <div>{this.props.date.getDate()} {monthsChanged[this.props.date.getMonth()]} {this.props.date.getFullYear()}</div>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

const daysName = ['pon', 'wto', 'śro', 'czw', 'pią', 'sob', 'nie'],
    tableHeader = [];
daysName.forEach((item, index) => tableHeader.push(<th key={`thead-${index}`}>{item}</th>));

export default class Calendar extends Component {
    getDaysInMonth = (month, year) => {
        const thisMonthLastDate = new Date(year, month + 1, 0).getDate(),
            thisMonthFirstDay = new Date(year, month, 1).getDay() || 7,
            nextMonthFirstDay = new Date(year, month + 1, 1).getDay(),
            prevMonthLastDate = new Date(year, month, 0).getDate(),
            daysArray = [],
            daysGroupByWeekArray = [[], [], [], [], [], []];

        for (let i = thisMonthFirstDay - 2; i >= 0; i--) {
            daysArray.push(<td id={`month-${this.props.month}-day-${prevMonthLastDate - i}`}
                               key={`month-${this.props.month}-day-${prevMonthLastDate - i}`}
                               className='inactive-month'
                               onClick={this.props.goToPreviousMonth}>{prevMonthLastDate - i}</td>);
        }

        for (let i = 1; i <= thisMonthLastDate; i++) {
            daysArray.push(<td
                id={`month-${this.props.month + 1}-day-${i}`}
                className={this.props.date.getDate() === i
                && this.props.month === this.props.date.getMonth()
                && this.props.year === this.props.date.getFullYear() ? 'current-day' : null}
                key={`month-${this.props.month + 1}-day-${i}`}>{i}</td>);
        }

        for (let i = 1; i <= 8 - nextMonthFirstDay; i++) {
            daysArray.push(<td id={`month-${this.props.month + 2}-day-${i}`}
                               key={`month-${this.props.month + 2}-day-${i}`} className='inactive-month'
                               onClick={this.props.goToNextMonth}>{i}</td>);
        }

        if (daysArray.length / 7 < 6) {
            for (let i = 9 - nextMonthFirstDay; i <= 15 - nextMonthFirstDay; i++) {
                daysArray.push(<td id={`month-${this.props.month + 2}-day-${i}`}
                                   key={`month-${this.props.month + 2}-day-${i}`} className='inactive-month'
                                   onClick={this.props.goToNextMonth}>{i}</td>);
            }
        }

        for (let i = 0; i < daysArray.length; i++) {
            daysGroupByWeekArray[Math.floor(i / 7)][i % 7] = daysArray[i];
        }

        return daysGroupByWeekArray;
    };

    render() {
        const weekArray = this.getDaysInMonth(this.props.month, this.props.year);
        return (
            <table>
                <thead>
                <tr>
                    {tableHeader}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {weekArray[0]}
                </tr>
                <tr>
                    {weekArray[1]}
                </tr>
                <tr>
                    {weekArray[2]}
                </tr>
                <tr>
                    {weekArray[3]}
                </tr>
                <tr>
                    {weekArray[4]}
                </tr>
                <tr>
                    {weekArray[5]}
                </tr>
                </tbody>
            </table>
        )
    }
}
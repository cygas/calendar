import React, {Component} from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import Time from './components/Time';
import AddNote from './components/AddNote';

const date = new Date(),
    monthAction = {
        up: 1,
        down: -1
    },
    removeClassFromContainer = (container, className) => {
        container.querySelectorAll(`.${className}`)
            .forEach(item => item.classList.remove(className));
    },
    addClassToElementIfTrue = (element, className, condition) => {
        if (!condition) {
            element.classList.add(className);
        }
    };

export default class App extends Component {
    state = {
        date: new Date(),
        month: Number(date.getMonth()),
        year: Number(date.getFullYear()),
    };

    componentDidMount() {
        setInterval(() => this.setState({
            date: new Date()
        }), 1000)
    }

    calculateNewMonthAndYear = (name, action) => {
        let newMonth = this.state.month,
            newYear = this.state.year;

        switch (name) {
            case 'previous':
                newMonth -= 1;
                break;
            case 'current' :
                newMonth += monthAction[action];
                break;
            case 'next':
                newMonth += 1;
                break;
        }

        switch (newMonth) {
            case 12:
                newMonth = 0;
                newYear += 1;
                break;
            case -1:
                newMonth = 11;
                newYear -= 1;
                break;
        }

        this.setState(() => ({month: newMonth, year: newYear}));
    };

    backToCurrentMonth = () => {
        const currentDate = new Date();
        this.setState({month: currentDate.getMonth(), year: currentDate.getFullYear()});
    };

    goToPreviousMonth = () => this.calculateNewMonthAndYear('previous');

    goToNextMonth = () => this.calculateNewMonthAndYear('next');

    changeMonth = e => this.calculateNewMonthAndYear('current', e.target.dataset.action);

    showNotes = e => {
        if (e.target.dataset.note) return;
        const day = e.target,
            note = day.firstElementChild,
            dayClass = 'active-day',
            noteClass = 'active-note',
            isActiveNote = note.classList.contains(noteClass),
            isActiveDay = day.classList.contains(dayClass),
            calendarContainer = document.querySelector('#calendar-container');

        removeClassFromContainer(calendarContainer, dayClass);
        removeClassFromContainer(calendarContainer, noteClass);
        addClassToElementIfTrue(day, dayClass, isActiveDay);
        addClassToElementIfTrue(note, noteClass, isActiveNote);
    };

    addNoteToDate = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className='main-container'>
                <div id='calendar-container' className='calendar-container'>
                    <Time
                        date={this.state.date}
                        backToCurrentMonth={this.backToCurrentMonth}
                    />
                    <Header
                        month={this.state.month}
                        year={this.state.year}
                        changeMonth={this.changeMonth}
                    />
                    <Calendar
                        date={this.state.date}
                        month={this.state.month}
                        year={this.state.year}
                        goToPreviousMonth={this.goToPreviousMonth}
                        goToNextMonth={this.goToNextMonth}
                        showNotes={this.showNotes}
                    />

                </div>
                <AddNote addNoteToDate={this.addNoteToDate}/>
            </div>
        )
    }
}
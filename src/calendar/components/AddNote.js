import React, {Component} from 'react';

export default class AddNote extends Component {
    render() {
        return (
            <form className='add-note-form' onSubmit={this.props.addNoteToDate}>
                <input type='text' placeholder='wprowadź  notatkę...'/>
                <button>+</button>
            </form>
        );
    }
}
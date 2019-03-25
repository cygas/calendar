import React, {Component} from 'react';

export default class AddNote extends Component {
    render() {
        return (
            <form className='add-note-form' onSubmit={this.props.addNoteToDate}>
                <input type='text' placeholder='wprowadź  notatkę...' value={this.props.note} onChange={this.props.addNoteToState}/>
                <button>+</button>
            </form>
        );
    }
}
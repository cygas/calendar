import React, {Component} from 'react';

export default class AddNote extends Component {
    render() {
        return (
            <form className='add-note-form'>
                <input type='text' placeholder='wprowadź  notatkę...'/>
                <button>+</button>
            </form>
        );
    }
}
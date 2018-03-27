const React = require('react');

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

    }

    add() {
        let v = this.refs.txt.value;
        this.refs.txt.value = "";
        this.props.addNote(v);
    }

    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter your note"/>
                <button onClick={this.add.bind(this)}>Add note</button>
            </div>
        );
    }
}

module.exports = NoteForm;
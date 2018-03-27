const React = require('react');
const Note = require('./Note.jsx');
const NoteForm = require('./NoteForm.jsx');

class List extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ["Android", "IOS", "NodeJS"]
        }
    }

    add(text) {
        this.state.mang.push(text);
        this.setState(this.state);
    };

    del(index) {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    };

    render() {
        return (
            <div>
                <NoteForm addNote={this.add.bind(this)}/>
                {this.state.mang.map((e, i) => {
                    return <Note key={i} remove={this.del.bind(this)} index={i}>{e}</Note>
                })}
            </div>
        );
    }
}

module.exports = List;
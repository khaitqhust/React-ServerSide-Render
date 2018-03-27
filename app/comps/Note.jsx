const React = require('react');

class Note extends React.Component {
    constructor (props) {
        super(props);
    }

    del() {
        this.props.remove(this.props.index);
    };

    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.del.bind(this)}>Delete</button>
            </div>
        );
    }
}

module.exports = Note;
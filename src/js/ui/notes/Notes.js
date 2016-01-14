var React = require('react');
var NoteList = require('./NoteList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function(){
    return (
      <div>
        <h2>Notes for {this.props.username}</h2>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
});

module.exports = Notes ;
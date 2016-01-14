var React = require('react');

var NoteList = React.createClass({
  propsType: {
    notes: React.PropTypes.array.isRequired
  },
  render: function(){
    var notes = this.props.notes.map(function (note, index) {
      return <li key={index} className="list-group-item">{note['.value']}</li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    );
  }
});

module.exports = NoteList ;
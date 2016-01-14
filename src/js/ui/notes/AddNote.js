var React = require('react');

var AddNote = React.createClass({
  propType: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired  
  },
  setRef: function (ref) {
    this.newNote = ref;
  },
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.newNote.value) {
      this.props.addNote(this.newNote.value);
      this.newNote.value = '';
    }
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} role="form">
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Type your note here..." ref={this.setRef}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">Add Notes</button>
            </span>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = AddNote ;
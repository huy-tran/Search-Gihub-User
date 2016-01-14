import React from 'react';

class AddNote extends React.Component{
  setRef(ref) {
    this.newNote = ref;
  }
  handleSubmit() {
    if (this.newNote.value) {
      this.props.addNote(this.newNote.value);
      this.newNote.value = '';
    }
  }
  render(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Type your note here..." ref={(ref) => this.setRef(ref)}/>
        <span className="input-group-btn">
          <button onClick={() => this.handleSubmit()} type="button" className="btn btn-primary">Add Notes</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired 
};

export default AddNote;
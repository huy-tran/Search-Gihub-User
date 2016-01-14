import React from 'react';
import NoteList from './NoteList';
import AddNote from './AddNote';

const Notes = ({username, notes, addNote}) => {
  return (
    <div>
      <h2>Notes for {username}</h2>
      <AddNote username={username} addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default Notes;

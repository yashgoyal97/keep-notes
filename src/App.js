import './App.css';
import React, { useState } from 'react';
import { GrAddCircle, GrFormClose } from 'react-icons/gr';
import NotesContainer from './NotesContainer';

function App() {
  const [newNote, setNewNote] = useState({
    title: '',
    note: '',
  });
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    document.getElementById('modalDialog').style.display = 'flex';
    document.getElementById('overlay').classList.add('active');
  };

  const handleCloseDialog = () => {
    document.getElementById('modalDialog').style.display = 'none';
    document.getElementById('overlay').classList.remove('active');
  };

  const handleSaveNote = () => {
    if (newNote.title && newNote.note) {
      setNotes([...notes, { title: newNote.title, note: newNote.note }]);
      setNewNote({
        title: '',
        note: '',
      });
      document.getElementById('modalDialog').style.display = 'none';
      document.getElementById('overlay').classList.remove('active');
    }
  };

  const handleDeleteNote = (index) => {
    const newList = notes;
    newList.splice(index, 1);
    setNotes(newList);
    setNewNote({
      title: '',
      note: '',
    });
  };

  const handleNoteChange = () => {
    setNewNote({
      title: document.getElementById('titleInput').value,
      note: document.getElementById('noteInput').value,
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Keep Notes</h1>
        <GrAddCircle
          className="add-notes-icon"
          size={30}
          onClick={handleAddNote}
        ></GrAddCircle>
      </header>
      <main>
        <form id="modalDialog">
          <GrFormClose
            className="close-dialog-icon"
            size={20}
            onClick={handleCloseDialog}
          ></GrFormClose>
          <input
            name="title"
            id="titleInput"
            className="input-text"
            placeholder="Title"
            value={newNote.title}
            onChange={handleNoteChange}
            required
          />
          <textarea
            name="note"
            id="noteInput"
            className="input-text"
            placeholder="Note"
            value={newNote.note}
            onChange={handleNoteChange}
            required
          />
          <button className="input-text save-button" onClick={handleSaveNote}>
            SAVE
          </button>
        </form>
        <div id="overlay"></div>
      </main>
      {notes && (
        <NotesContainer
          notes={notes}
          delEvent={handleDeleteNote}
        ></NotesContainer>
      )}
    </div>
  );
}

export default App;

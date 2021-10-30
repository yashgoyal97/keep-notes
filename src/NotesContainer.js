import React, { Fragment } from 'react';
import './NotesContainer.css';
import { MdDeleteOutline } from 'react-icons/md';

const NotesContainer = (props) => {
  const notes = props.notes;

  const notesList = notes.map((note, index) => {
    return (
      <div id="note" key={note.id}>
        <div id="noteHead">
          <h4>{note.title}</h4>
          <MdDeleteOutline
            size={20}
            onClick={() => props.delEvent(index)}
          ></MdDeleteOutline>
        </div>
        <pre>{note.note}</pre>
      </div>
    );
  });
  return <Fragment>{notesList}</Fragment>;
};

export default NotesContainer;

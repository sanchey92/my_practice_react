import React from "react";

const Notes = ({notes, onRemove}) => {
  return (
    <ul className="list-group">

      {notes.map((note) => {
        return (
          <li
            className="list-group-item note"
            key={note.id}>
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button
              onClick={() => onRemove(note.id)}
              type="button"
              className="btn btn-outline-danger btn-sm">&times;
            </button>
          </li>
        )
      })}
    </ul>
  )
};

export default Notes
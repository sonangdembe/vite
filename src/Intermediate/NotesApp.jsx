import React, { useState } from 'react';

export const NotesApp = () => {
  const [create, setCreate] = useState('');  // State for new note text or editing note text
  const [edit, setEdit] = useState([]);  // Array to store notes
  const [editIndex, setEditIndex] = useState(null);  // Index of the note to edit

  // Add a new note
  const handleAdd = () => {
    if (create.trim() !== "") {
      setEdit([...edit, create]);  // Add new note to the array
      setCreate('');  // Reset input field
    }
  };

  // Edit an existing note
  const handleEdit = () => {
    if (editIndex !== null && create.trim() !== "") {
      const updatedNotes = [...edit];  // Copy the current notes array
      updatedNotes[editIndex] = create;  // Update the note at the selected index
      setEdit(updatedNotes);  // Save the updated notes array
      setCreate('');  // Reset the input field
      setEditIndex(null);  // Reset edit mode
    }
  };

  // Select the note to edit
  const selectNoteToEdit = (index) => {
    setCreate(edit[index]);  // Load the note's text into the input field
    setEditIndex(index);  // Set the index of the note to edit
  };

  // Delete a note
  const handleDelete = (index) => {
    const updatedNotes = edit.filter((_, i) => i !== index);  // Remove the note at the specified index
    setEdit(updatedNotes);  // Update the notes array after deletion
  };

  return (
    <>
      <h3>Note App</h3>

      <label htmlFor="">Enter here text: </label>
      <textarea
        placeholder="Enter your note here"
        value={create}  // Value of the input is controlled by the `create` state
        onChange={(e) => setCreate(e.target.value)}  // Update `create` state on change
      />

      <button onClick={handleAdd}>Add Note</button>
      <button onClick={handleEdit}>Edit Note</button>

      <h4>Notes:</h4>
      <ul>
        {edit.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => selectNoteToEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

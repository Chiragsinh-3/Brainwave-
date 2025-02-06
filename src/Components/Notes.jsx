import React, { useContext, useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Loading from "./Loading";
import { useNavigate, useLocation } from "react-router-dom";

const Notes = () => {
  const context = useContext(NoteContext);
  const navigate = useNavigate(); // Use the useNavigate hook
  const { notes, fetchNotes } = context;
  const [loading, setLoading] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("token")) {
        setLoading(true);
        await fetchNotes();
        setLoading(false);
      } else {
        navigate("/login"); // Use navigate function
      }
    }
    fetchData();
  }, [editingNoteId]);

  const handleEditClick = (id) => {
    setEditingNoteId(id);
  };

  return (
    <>
      {loading && <Loading />}
      <div className='max-w-screen min-h-screen py-16 bg-white dark:bg-slate-900'>
        <div className='container mx-auto  p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg'>
          <div className='grid grid-cols-1 gap-4 my-5'>
            <AddNote />
            {notes && notes.length > 0 && (
              <>
                <h2 className='text-4xl font-bold text-center my-5 text-gray-900 dark:text-gray-100'>
                  Your Notes
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {notes.map((note) => (
                    <NoteItem
                      key={note._id || note.id} // Ensure the key is unique
                      note={note}
                      isEditing={editingNoteId === note._id}
                      onEditClick={() => handleEditClick(note._id)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;

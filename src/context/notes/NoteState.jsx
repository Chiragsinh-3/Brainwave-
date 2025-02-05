import React, { useContext, useState } from "react";
import NoteContext from "./noteContext";

import AlertContext from "../alert/alertContext";

const host = import.meta.env.VITE_HOST;
const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;

  // get all notes
  const fetchNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
      throw error;
    }
  };

  //add a note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const json = await response.json();

      // Make sure we're adding all necessary fields
      const note = {
        _id: json._id, // Changed from id to _id to match the structure
        user: json.user,
        title: json.title,
        description: json.description,
        tag: json.tag,
        __v: json.__v,
      };

      setNotes((prevNotes) => [...prevNotes, note]);
      addAlert("success", "Success", "Note Added!");
      return true;
    } catch (error) {
      console.error("Error adding note:", error);
      throw error;
    }
  };

  //update a note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to update note");
      }

      const json = await response.json();

      // Update notes state using the returned updated note
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        )
      );
      addAlert("success", "Success", "Note Updated!");
      return true;
    } catch (error) {
      console.error("Error updating note:", error);
      throw error;
    }
  };

  //delete a note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      await response.json();

      // Update notes state after successful deletion
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      addAlert("success", "Success", "Note Deleted!");
      return true;
    } catch (error) {
      console.error("Error deleting note:", error);
      throw error;
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, fetchNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

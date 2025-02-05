import React, { useContext, useState, useEffect, useRef } from "react";
import NoteContext from "../context/notes/noteContext";
import Loading from "./Loading";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, ChevronDown, ChevronUp, Check, X } from "lucide-react";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote, editNote } = context;
  const { note } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [loading, setLoading] = useState(false);

  const textareaRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleEditChange = (e) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      adjustHeight(textareaRef.current);
    }
  }, [isEditing]);

  useEffect(() => {
    if (descriptionRef.current) {
      setIsOverflowing(
        descriptionRef.current.scrollHeight >
          descriptionRef.current.clientHeight
      );
    }
  }, [note.description]);

  function adjustHeight(el) {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (note._id) {
      await editNote(
        note._id,
        editedNote.title,
        editedNote.description,
        editedNote.tag
      );
      setLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Card className='w-full max-w-2xl mx-auto'>
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <CardHeader>
              <Input
                type='text'
                name='title'
                value={editedNote.title}
                onChange={handleEditChange}
                className='text-2xl font-semibold dark:text-white'
                placeholder='Note Title'
              />
            </CardHeader>
            <CardContent>
              <Textarea
                ref={textareaRef}
                name='description'
                value={editedNote.description}
                onChange={handleEditChange}
                className='min-h-[120px] resize-none dark:text-white'
                placeholder='Write your note here...'
              />
            </CardContent>
            <CardFooter className='justify-end space-x-2'>
              <Button
                variant='outline'
                className='dark:text-white'
                onClick={() => setIsEditing(false)}
              >
                <X className='w-4 h-4 mr-2 ' />
                Cancel
              </Button>
              <Button type='submit' className='dark:text-white'>
                <Check className='w-4 h-4 mr-2' />
                Save
              </Button>
            </CardFooter>
          </form>
        ) : (
          <>
            <CardHeader>
              <h3 className='text-2xl dark:text-white font-semibold tracking-tight'>
                {note.title}
              </h3>
            </CardHeader>
            <CardContent>
              <div ref={descriptionRef} className='space-y-2'>
                <p
                  className={`text-gray-600 dark:text-gray-200 ${
                    isExpanded ? "" : "line-clamp-5"
                  }`}
                >
                  {note.description}
                </p>
                {isOverflowing && (
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setIsExpanded(!isExpanded)}
                    className='flex items-center text-blue-500 hover:text-blue-600'
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className='w-4 h-4 mr-1' />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className='w-4 h-4 mr-1' />
                        Show More
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
            <CardFooter className='justify-end space-x-2'>
              <Button
                variant='ghost'
                size='icon'
                onClick={async () => {
                  if (note._id) {
                    setLoading(true);
                    await deleteNote(note._id);
                    setLoading(false);
                  }
                }}
              >
                <Trash2 className='w-4 h-4 text-red-500' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsEditing(true)}
              >
                <Pencil className='w-4 h-4 dark:text-white' />
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </>
  );
};

export default NoteItem;

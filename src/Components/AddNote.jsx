import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import AlertContext from "../context/alert/alertContext";
import Loading from "./Loading";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { PenLine } from "lucide-react";
import { Input } from "./ui/input";

const AddNote = () => {
  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;

  const context = useContext(NoteContext);
  const { addNote } = context;

  const [loading, setLoading] = useState(false);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    addNote(note.title, note.description, note.tag); // Pass individual properties
    setNote({ title: "", description: "", tag: "" }); // Clear the form
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading />}
      <Card className='w-full max-w-md mx-auto shadow-lg'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-3xl font-bold flex items-center gap-2'>
            <PenLine className='w-6 h-6 dark:text-white' />
            <span className='dark:text-white'>Add Note</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            id='add-note-form'
            onSubmit={handleSubmit}
            className='space-y-6'
          >
            <div className='space-y-2'>
              <Label htmlFor='title' className='dark:text-white'>
                Title
              </Label>
              <Input
                id='title'
                name='title'
                value={note.title}
                onChange={handleChange}
                placeholder='Enter note title'
                className='transition-all duration-200 focus:scale-[1.01] dark:text-white'
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='description' className='dark:text-white'>
                Description
              </Label>
              <Textarea
                id='description'
                name='description'
                value={note.description}
                onChange={handleChange}
                placeholder='Enter note description'
                className='min-h-[120px] transition-all duration-200 focus:scale-[1.01] dark:text-white'
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='tag' className='dark:text-white'>
                Tag
              </Label>
              <Input
                id='tag'
                name='tag'
                value={note.tag}
                onChange={handleChange}
                placeholder='Enter note tag'
                className='transition-all duration-200 focus:scale-[1.01] dark:text-white'
                required
              />
            </div>

            <Button
              type='submit'
              form='add-note-form'
              className='w-full bg-purple-700 hover:bg-purple-800 text-white transition-all duration-200 hover:scale-[1.02]'
            >
              Create Note
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddNote;

import express from "express";
import fetchUser from "../middleware/fetchUser.js";
import NOTESMODEL from "../module/Notes.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Route:01 fetch a notes using: POST "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await NOTESMODEL.find({ user: req.user.id });
  res.json(notes);
});

// Route:02 add a notes using: POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchUser,
  body("title", "Enter a valid name").isLength({ min: 3 }),
  body("description", "Enter a valid description").isLength({ min: 5 }),
  async (req, res) => {
    const { title, tag, description } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const notes = new NOTESMODEL({
        user: req.user.id,
        title,
        tag,
        description,
      });
      await notes.save();
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

// Route:03 update a notes using: PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    let newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await NOTESMODEL.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Not Found" });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not Allowed" });
    }
    note = await NOTESMODEL.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Some error occurred" });
  }
});

// Route:04 delete a notes using: DELETE "/api/notes/deletenote". Login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    let note = await NOTESMODEL.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Not Found" });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not Allowed" });
    }
    note = await NOTESMODEL.findByIdAndDelete(req.params.id);
    res.json({ success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Some error occurred" });
  }
});

export default router;

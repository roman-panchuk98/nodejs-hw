import { Notes } from '../models/note.js';

export const getAllNotes = async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
};

export const getHomePage = async (req, res) => {
  res.status(200).json({
    message: 'Hello Node.js',
  });
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Notes.findById(noteId);

  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const note = await Notes.create(req.body);
  res.status(201).json(note);
};

export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await Notes.findOneAndDelete({
    _id: noteId,
  });

  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  res.status(200).json(note);
};

export const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await Notes.findOneAndUpdate(
    {
      _id: noteId,
    },
    req.body,
    { new: true },
  );
  res.status(200).json(note);
};

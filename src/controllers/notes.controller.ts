import { Request, Response } from "express";

import { NotesService } from "../services/notes.service";

const notesService = new NotesService();

export const createNote = (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;
    const newNote = notesService.createNote(title, body);
    res.status(201).json(newNote);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.startsWith("Bad Request")) {
        res.status(400).send(error.message);
      } else {
        console.error(error);
        res.status(500).send("Something went wrong!");
      }
    } else {
      console.error("Unexpected error:", error);
      res.status(500).send("Something went wrong!");
    }
  }
};

export const getAllNotes = (req: Request, res: Response) => {
  const allNotes = notesService.getAllNotes();
  res.status(200).json(allNotes);
};

export const getNoteById = (req: Request, res: Response) => {
  const note = notesService.getNoteById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
};

export const updateNote = (req: Request, res: Response) => {
  const updatedNote = req.body;
  const note = notesService.updateNote(req.params.id, updatedNote);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send("Note not found");
  }
};

export const deleteNote = (req: Request, res: Response) => {
  const isDeleted = notesService.deleteNote(req.params.id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).send("Note not found");
  }
};

import { Router } from "express";

import * as notesController from "../controllers/notes.controller";

const router = Router();

router.post("/notes", notesController.createNote);
router.get("/notes", notesController.getAllNotes);
router.get("/notes/:id", notesController.getNoteById);
router.put("/notes/:id", notesController.updateNote);
router.delete("/notes/:id", notesController.deleteNote);

export default router;

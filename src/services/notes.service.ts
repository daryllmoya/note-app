import { v4 as uuidv4 } from "uuid";

import { Note } from "../models/note.model";

const MAX_NOTE_BODY_LENGTH = 24;
const BAD_REQUEST_PREFIX = "Bad Request:";

/**
 * Service class for managing notes entity
 */
export class NotesService {
  private notes: Note[] = [];

  constructor() {}

  /**
   * Creates a new note
   * @param title - The title of the note
   * @param body - The body text of the note
   * @returns The newly created note
   */
  createNote(title: string, body: string): Note {
    try {
      if (!title || !title.trim()) {
        throw new Error("Title is missing");
      }
      if (!body || !body.trim()) {
        throw new Error("Body is missing");
      } else if (body.length > MAX_NOTE_BODY_LENGTH) {
        throw new Error("Body length exceeds maximum allowed length");
      }

      const newNote: Note = { id: uuidv4(), title, body };
      this.notes.push(newNote);
      return newNote;
    } catch (error) {
      if (error instanceof Error) {
        // Check if it's a known Error type
        throw new Error(`${BAD_REQUEST_PREFIX} ${error.message}`);
      } else {
        throw new Error("Internal Server Error");
      }
    }
  }

  /**
   * Returns all notes
   * @returns An array of all notes
   */
  getAllNotes(): Note[] {
    return this.notes;
  }

  /**
   * Retrieves a note by its ID
   * @param id - The ID of the note to retrieve
   * @returns The note if found, otherwise undefined
   */
  getNoteById(id: string): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  /**
   * Updates a note by its ID
   * @param id - The ID of the note to update
   * @param updatedNote - The updated note data
   * @returns The updated note if found, otherwise undefined
   */
  updateNote(id: string, updatedNote: Note): Note | undefined {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      return updatedNote;
    }
    return undefined;
  }

  /**
   * Deletes a note by its ID
   * @param id - The ID of the note to delete
   * @returns True if the note was deleted, otherwise false
   */
  deleteNote(id: string): boolean {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
      return true;
    }
    return false;
  }
}

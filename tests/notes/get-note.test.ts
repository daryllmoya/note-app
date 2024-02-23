import { NotesService } from "../../src/services/notes.service";

describe("getNote", () => {
  let notesService: NotesService;

  beforeEach(() => {
    notesService = new NotesService();
  });

  // Successful Scenarios
  it("should return an empty notes array", () => {
    const allNotes = notesService.getAllNotes();
    expect(allNotes.length).toBe(0);
    expect(allNotes).toEqual([]);
  });

  it("should add notes to the store and get it all back", () => {
    notesService.createNote("Note Title", "Note Body");
    notesService.createNote("Another Title", "Another Body");
    const allNotes = notesService.getAllNotes();
    expect(allNotes.length).toBe(2);
  });

  it("should create a new note with valid input and get it back", () => {
    const newNote = notesService.createNote("New Title", "New Body");
    const existingNote = notesService.getNoteById(newNote.id);
    expect(existingNote).toEqual(newNote);
  });

  // Failing Scenarios
  it("should return undefined if a note with the given ID is not found", () => {
    const nonExistentId = "some-non-existent-id";
    const retrievedNote = notesService.getNoteById(nonExistentId);
    expect(retrievedNote).toBeUndefined();
  });
});

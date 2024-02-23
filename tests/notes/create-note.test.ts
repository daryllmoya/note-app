import { NotesService } from "../../src/services/notes.service";

describe("createNote", () => {
  let notesService: NotesService;

  beforeEach(() => {
    notesService = new NotesService();
  });

  // Successful Scenarios
  it("should create a new note with valid input", () => {
    const newNote = notesService.createNote("Test Title", "Test Body");
    expect(newNote.id).toBeDefined();
    expect(newNote.title).toBe("Test Title");
    expect(newNote.body).toBe("Test Body");
  });

  // Failing Scenarios
  it("should throw a Bad Request error if the title is missing or contains only spaces", () => {
    expect(() => {
      notesService.createNote("", "Test Body");
    }).toThrow("Bad Request: Title is missing");
  });

  it("should throw a Bad Request error if the body is missing or contains only spaces", () => {
    expect(() => {
      notesService.createNote("Test Title", "");
    }).toThrow("Bad Request: Body is missing");
  });

  it("should throw a Bad Request error if the body is too long", () => {
    const longBody = "Very long string exceeding your defined limit...";
    expect(() => {
      notesService.createNote("Short Title", longBody);
    }).toThrow("Bad Request: Body length exceeds maximum allowed length");
  });
});

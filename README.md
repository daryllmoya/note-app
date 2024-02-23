# Notes API Project

A simple RESTful API for creating, retrieving, updating, and deleting notes. Built with TypeScript, Node.js, and Express.

## Features

* **Create Notes:** Store new notes with a title and body.
* **Get All Notes:** Retrieve a list of all stored notes.
* **Get Note by ID:** Fetch a specific note by its unique ID.
* **Update Note:** Modify the title and/or body of an existing note.
* **Delete Note:** Remove a note from storage.

## Installation

1. **Clone the repository:**

    ```bash
    git clone ...
    ```

2. **Install dependencies:**

    ```bash
    cd notes-api
    npm install 
    ```

3. **Running the Development Server:**

    ```bash
    npm start
    ```

3. **Running Tests:**

    ```bash
    npm test
    ```

## API Endpoints

* **GET /api/notes** - Returns an array of all notes.
* **POST /api/notes** - Creates a new note. (Include expected request body format)
* **GET /api/notes/:id** - Retrieves a note by its ID.
* **PUT /api/notes/:id** - Updates a note by its ID. (Include expected request body)
* **DELETE /api/notes/:id** - Deletes a note by its ID.

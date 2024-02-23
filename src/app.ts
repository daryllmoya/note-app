import express, { Request, Response } from "express";

import notesRoutes from "./routes/notes.route";

const port = 3000;
const app = express();

app.use(express.json());

app.use("/api", notesRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

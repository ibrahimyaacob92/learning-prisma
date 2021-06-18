import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("I am sadasd");
});

app.use(express.json());
app.use("/api/user", require("./routes/users"));
app.use("/api/post", require("./routes/post"));

app.listen(5000, () => {
  console.log("Listening on sd 50001");
});

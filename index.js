import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    //Step 1 - Make the get route work and render the index.ejs file.
    res.sendFile(__dirname + "/public/index.html");
  });

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}.`)
})
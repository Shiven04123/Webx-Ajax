const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");


const registeredUsers = ["shiven", "shivenbansal"]; // Simulate existing users

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html")); // or whatever your file is named
});

app.post("/check-username", (req, res) => {
  const { username } = req.body;
  const isAvailable = !registeredUsers.includes(username);
  res.json({ available: isAvailable });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
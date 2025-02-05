const express = require("express");
const path = require("path");
const app = express();

// ...existing code...

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// ...existing code...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

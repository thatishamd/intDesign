const connectDB = require("./src/db");
const app = require("./src/server");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Connect DB
connectDB();

// Server starting on PORT
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

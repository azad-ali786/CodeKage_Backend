import app from "./app";
require("dotenv").config();
const PORT = process.env.PORT || 8000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

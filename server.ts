import app from "./app";

const PORT: number = 8000; // Set your desired port number

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

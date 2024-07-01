const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());

const questionsRouter = require("./src/routes/questions");

app.use("/questions", questionsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
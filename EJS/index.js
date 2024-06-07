const express = require("express");
const app = express();

const port = 5123;
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
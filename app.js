const express = require("express");
const AppRouter = require("./routes/employees.route");

const ApiError = require("./API-Error");
const app = express();
app.use(express.json());

app.use("/", AppRouter);

//Error
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;

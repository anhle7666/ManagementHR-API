const express = require("express");
const AppRouter = express.Router();

AppRouter.get("/", (req, res) => {
    res.json({ message: "Welcome to API Management Human Resouces" });
});
// Get all users
AppRouter.get("/users", (req, res) => {
    res.json(users);
});

// Get a single user
AppRouter.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

// Create a new user
AppRouter.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json(user);
});

// Update a user
AppRouter.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if (user) {
        user.name = req.body.name;
        user.email = req.body.email;
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

// Delete a user
AppRouter.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.send("User deleted");
    } else {
        res.status(404).send("User not found");
    }
});
module.exports = AppRouter;

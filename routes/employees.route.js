const express = require("express");
const AppRouter = express.Router();
const EmployeeController = require('../controllers/Employees.controller.js')

AppRouter.get("/", (req, res) => {
    res.json({ message: "Welcome to API Management Human Resouces" });
});


// Get all users
AppRouter.get("/employees", async (req, res, next) => {

    try {

        const allEmloyees = await EmployeeController.getAllEmployee();
        res.json(allEmloyees);
    } catch (error) {
        next(error);
    }
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

//Add a new Employee
AppRouter.post("/employees", async (req, res, next) => {
  try {
    const user = req.body;
    const result = await EmployeeController.AddNewEmployee(user);
    res.json(`Post Success ${result}`);
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
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

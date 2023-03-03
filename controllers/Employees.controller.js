const Employee = require('../models/Employees.js')

exports.AddNewEmployee = async (EmployeeData) => {
    try {
        const employee = new Employee(EmployeeData);

        const addNewEmployee = await employee.save();

        // console.log(`Saved : ${addNewEmployee}`);

        return addNewEmployee.id;
    } catch (error) {
        console.error(`Error to adding employee ${error}`);
        throw error;
    }
}


exports.getAllEmployee = async () => {
  const employees = await Employee.find();
  return employees;
};
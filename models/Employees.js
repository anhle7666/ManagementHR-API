const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    id: String,
    personalInfo: {
        name: String,
        avatar: String,
        dob: String,
        gender: String,
        cmnd: String,
        address: String,
        phone: String,
        email: String,
        nationality: String,
        maritalStatus: String,
    },
    jobInfo: {
        idEmployee: String,
        department: String,
        position: String,
        salary: Number,
        jobStatus: Boolean,
    },
    educationInfo: {
        degree: String,
        major: String,
        university: String,
        graduationYear: String,
        educationLevel: String,
    },
    trainingInfo: [
        {
            name: String,
            institution: String,
            startDate: String,
            endDate: String,
        },
    ],
});



const Employee = mongoose.model('Employees', employeeSchema);

module.exports = Employee;
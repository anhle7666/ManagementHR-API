const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    count: { type: Number, default: 1 },
});

const Counter = mongoose.model("Counter", counterSchema);

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

employeeSchema.pre("save", async function (next) {
    const doc = this;
    const counter = await Counter.findByIdAndUpdate(
        { _id: "employeeId" },
        { $inc: { count: 1 } },
        { new: true, upsert: true },
    );

    doc.id = counter.count;
    next();
});

const Employee = mongoose.model("Employees", employeeSchema);

module.exports = Employee;

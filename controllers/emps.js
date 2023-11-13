const Employee = require("../models/emps");

async function handleGetAllEmps(req, res) {
    const allEmpsData = await Employee.find({})
    return res.json(allEmpsData);
}

async function handleGetEmpsById(req, res) {
    const allEmpsData = await Employee.findById(req.params.id);
    if (!allEmpsData) return res.status(404).json ({ error: "not found " });
    return res.json(allEmpsData);
}


async function handleDeleteById(req, res) {
    await Employee.findByIdAndDelete(req.params.id);
    return res.json({ status: "success"});
}

async function handleCreateEmps(req, res) {
    const body = req.body;
    if( !body || !body.first_name || !body.last_name || !body.email || !body.gender ){
        return res.status(400).json({ msg: "All fields are required... "});
    }

    const result = await Employee.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
    })

    console.log("result", result);
    return res.status(201).json({ msg : "success" });
}

async function handleUpdateEmps(req, res) {
    const employeeId = req.params.id;
    const body = req.body;

    if (!employeeId || !body) {
        return res.status(400).json({ msg: "Invalid request. Provide employee ID and update data." });
    }
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ msg: "Employee not found." });
        }
        console.log("Updated employee:", updatedEmployee);
        return res.json({ msg: "Employee data updated successfully", updatedEmployee });
    } catch (error) {
        console.error("Error updating employee:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = {
    handleGetAllEmps,
    handleGetEmpsById,
    handleDeleteById,
    handleCreateEmps,
    handleUpdateEmps
}
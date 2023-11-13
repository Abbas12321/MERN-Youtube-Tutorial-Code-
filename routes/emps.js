const express = require("express");

const {
    handleGetAllEmps,
    handleGetEmpsById,
    handleDeleteById,
    handleCreateEmps,
    handleUpdateEmps
} = require("../controllers/emps")

const router = express.Router();

router.route("/").get(handleGetAllEmps).post(handleCreateEmps);

router.route("/:id").get(handleGetEmpsById).delete(handleDeleteById).patch(handleUpdateEmps);

module.exports = router;
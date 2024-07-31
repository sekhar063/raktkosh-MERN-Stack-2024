const express = require("express");
const router = express.Router();
const userRouters = require("./userRouters");
const bloodManagementRouters = require("./bloodManagementRouters");

router.use("/users", userRouters);
router.use("/publc", bloodManagementRouters);

module.exports = router;

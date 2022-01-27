var express = require('express');
const router = express.Router();


const usersRoute = require("./users");
const packsRoute = require("./packs.route");
const authRoute = require("./auth.route");


router.use("/users", usersRoute);
router.use("/packs", packsRoute);
router.use("/auth", authRoute);


module.exports = router;
let express = require("express");
let router = express.Router();

const userController = require("../controllers/userController.js")

router.post("/user",userController.createUser)
router.get("/user", userController.getUsers)
router.put("/user/:id", userController.updateItem)
router.delete("/user/:id", userController.deleteUser)

module.exports = router;
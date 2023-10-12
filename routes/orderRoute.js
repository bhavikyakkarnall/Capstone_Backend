let express = require("express");
let router = express.Router();

const orderController = require("../controllers/orderController.js")

router.post("/order",orderController.createOrder)
router.get("/order", orderController.getOrders)
router.put("/order", orderController.updateOrder)
router.delete("/order", orderController.deleteOrder)

module.exports = router;
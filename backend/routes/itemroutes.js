const router = require('express').Router();
const itemController = require("../controllers/item.controller.js");

router.get("/getAll", itemController.selectAll)
router.get("/getone/:title", itemController.selectOne)
router.post("/create", itemController.make)
router.put("/upd/:id", itemController.change)
router.delete("/destroy/:id", itemController.delt)




;

module.exports = router;
var InformationController = require("../controller/informationController");
InformationController = new InformationController();

// Information management routes
router.get("/information/:id", InformationController.getRecord);
router.post("/information", InformationController.createRecord);

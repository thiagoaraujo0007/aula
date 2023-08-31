module.exports = app => {
    const items = require("../controllers/item.controller");

    var router = require("express").Router();

    router.post("/", item.create);

    router.get("/", item.findALL);

    router.get("/Flammabless", item.findALLFlammabless);

    router.get("/:id", item.findOne);

    router.put("/:id", item.update);

    router.delete("/:id", item.delete);

    router.delete("/", item.deleteALL);

    app.use('/api/items', router);
    

};
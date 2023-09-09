module.exports = app => {
    const items = require("../controllers/item.controller");

    var router = require("express").Router();

    router.post("/", items.create);

    router.get("/", items.findALL);

    router.get("/Flammabless", items.findALLFlammabes);

    router.get("/:id", items.findOne);

    router.put("/:id", items.update);

    router.delete("/:id", items.delete);

    router.delete("/", items.deleteALL);

    app.use('/api/items', router);
    
//teste1
};
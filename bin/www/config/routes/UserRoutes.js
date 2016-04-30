"use strict";
const express = require("express");
const UserController = require("./../../app/controllers/UserController");
let router = express.Router();
class UserRoutes {
    constructor() {
        this._userController = new UserController();
    }
    get routes() {
        let controller = this._userController;
        router.delete("/:_id", controller.delete);
        router.get("/", controller.retrieve);
        router.get("/:_id", controller.findById);
        router.post("/", controller.create);
        router.put("/:_id", controller.update);
        return router;
    }
}
Object.seal(UserRoutes);
module.exports = UserRoutes;

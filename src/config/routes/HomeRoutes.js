"use strict";
const express = require("express");
let router = express.Router();
class HomeRoutes {
    get routes() {
        router.get("/about", (req, res, next) => {
            console.log("Got a GET request for the About page.");
            res.render("about", { title: "About" });
        });
        router.get("/contact", (req, res, next) => {
            console.log("Got a GET request for the Contact page.");
            res.render("contact", { title: "Contact" });
        });
        router.get("/", (req, res, next) => {
            console.log("Got a GET request for the Home page.");
            res.render("index", { title: "Home" });
        });
        return router;
    }
}
Object.seal(HomeRoutes);
module.exports = HomeRoutes;

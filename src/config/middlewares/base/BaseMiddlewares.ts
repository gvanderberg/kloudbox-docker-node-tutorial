import express = require("express");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import BaseRoutes = require("./../../routes/base/BaseRoutes");
import MethodOverride = require("./../MethodOverride");

class BaseMiddlewares {
    static get configuration() {
        var app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);

        return app;
    }
}

Object.seal(BaseMiddlewares);

export = BaseMiddlewares;
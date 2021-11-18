const express = require("express");
const TestController = require("../controllers/test");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module TestRoutes
 */

/**
 * Guarda una evaluación
 *
 * @name saveTest
 * @path {POST} /test
 */
api.post("/test", [md_auth.ensureAuth], TestController.saveTest);
api.post("/test1", [md_auth.ensureAuth], TestController.startTest);
/**
 * Obtiene todas las evaluaciones
 *
 * @name getTests
 * @path {GET} /test
 */
api.get("/test", [md_auth.ensureAuth], TestController.getTests);


module.exports = api;
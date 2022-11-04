var express = require("express");
var router = express.Router();

var setorController = require("../controllers/setorController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/mostrarTotalMaquinas", function (req, res) {
    setorController.mostrarTotalMaquinas(req, res);
});

router.get("/mostrarTotalServidor", function (req, res) {
    setorController.mostrarTotalServidor(req, res);
});

router.post("/cadastrarSetor", function (req, res) {
    setorController.cadastrarSetor(req, res);
})

router.get("/listarSetor", function (req, res) {
    setorController.listarSetor(req, res);
})

router.get("/listarPorSetor", function (req, res) {
    setorController.listarPorSetor(req, res);
})

module.exports = router;
var catalogoModel = require("../models/catalogoModel");

function listar(req, res) {
    catalogoModel.listar()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(
                "\nHouve um erro ao realizar o listar! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );   
}

function listarporNome(req, res) {
    var value = req.query.value

    catalogoModel.listarporNome(value)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(
                    "\nHouve um erro ao realizar o listar por nome! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarPorRelevante(req, res) {
    catalogoModel.listarPorRelevante()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(
                    "\nHouve um erro ao realizar o listar por relevante! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarPorCategoria(req, res) {
    var value = req.query.value

    catalogoModel.listarPorCategoria(value)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(
                    "\nHouve um erro ao realizar o listar por categoria! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarPorId(req, res) {
    var value = req.query.value

    catalogoModel.listarPorId(value)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(
                    "\nHouve um erro ao realizar o listar por categoria! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    listarporNome,
    listarPorRelevante,
    listarPorCategoria,
    listarPorId
}
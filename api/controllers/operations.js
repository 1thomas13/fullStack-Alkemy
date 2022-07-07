const {Operation} = require('../models')

exports.getAll = async(req, res) => {
    
    res.json({message: 'Operaciones'})
}

exports.createOperation = async(req, res) => {
    
    res.json({message: 'Operacion Creada Correctamente'})
}

exports.editOperation = async(req, res) => {
    
    res.json({message: 'Operacion Modificada Correctamente'})
}

exports.deleteOperation = async(req, res) => {
    
    res.json({message: 'Operacion Eleminada Correctamente'})
}
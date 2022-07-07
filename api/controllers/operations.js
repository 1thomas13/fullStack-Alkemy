const {Operation} = require('../models')
const {User} = require('../models')

exports.getAll = async(req, res) => {
    
    const user = await User.findOne({where: {id: req.data.id}})

    if(!user) {
        return res.status(400).json({message: 'El usuario no existe'})
    }

    const operations = await Operation.findAll({where: {userId: user.id}})

    res.json({message: operations})
}

exports.createOperation = async(req, res) => {

    const {category, amount, type} = req.body

    if(!category  || !amount || !type) {
        return res.status(400).json({message: 'Complete los campos'})
    }
    
    const user = await User.findOne({where: {id: req.data.id}})

    if(!user) {
        return res.status(400).json({message: 'el usuario no existe'})
    }

    const dateNow = Date.now();
    let date = new Date(dateNow);
    date = date.toLocaleDateString()
    
    const operation = {
        category,
        amount,
        type,
        userId: user.id,
        date
    }

    await Operation.create(operation)

    res.json({message: 'Operacion Creada Correctamente'})
}

exports.editOperation = async(req, res) => {

    const {operationId} = req.params
    const {amount, category} = req.body

    const user = await User.findOne({where: {id: req.data.id}})

    if(!user) {
        return res.status(400).json({message: 'El usuario no existe'})
    }

    const operation = await Operation.findOne({where: {id: operationId, userId: user.id}})

    if(!operation) {
        return res.status(400).json({message: 'No se encontro la operacion'})
    }

    const operationChanges = {
        amount: amount || operation.amount,
        category: category || operation.category
    }

    await Operation.update(operationChanges, {where: {id: operationId, userId: user.id}})
    
    res.json({message: 'Operacion Modificada Correctamente'})
}

exports.deleteOperation = async(req, res) => {

    const {operationId} = req.params

    const user = await User.findOne({where: {id: req.data.id}})

    if(!user) {
        return res.status(400).json({message: 'El usuario no existe'})
    }
    
    const operation = await Operation.findOne({where: {id: operationId, userId: user.id}})

    if(!operation) {
        return res.status(400).json({message: 'No se encontro la operacion'})
    }

    await Operation.destroy({where: {id: operationId, userId: user.id}})
    
    res.json({message: 'Operacion Eleminada Correctamente'})
}
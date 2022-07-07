const express = require('express')
const {getAll, createOperation, editOperation, deleteOperation} = require('../controllers/operations.js')
const {validateToken} = require('../middlewares')

const router = express.Router()

router.get('/', validateToken, getAll)

router.post('/', validateToken, createOperation)

router.patch('/:operationId', validateToken, editOperation)

router.delete('/:operationId', validateToken,  deleteOperation)

module.exports = router
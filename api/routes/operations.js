const express = require('express')
const {getAll, createOperation, editOperation, deleteOperation} = require('../controllers/operations.js')
const {validateToken} = require('../middlewares')

const router = express.Router()

router.get('/:userId', validateToken, getAll)

router.post('/:userId', validateToken, createOperation)

router.patch('/:userId', validateToken, editOperation)

router.delete('/:userId/:operationId', validateToken,  deleteOperation)

module.exports = router
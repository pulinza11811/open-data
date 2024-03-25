const express = require('express')
const router = express.Router()

const { read, list, create, update, _delete } = require('../controller/product')

router.get('/province', list)
router.get('/province/:id',read)
router.post('/province', create)
router.put('/province/:id', update)
router.delete('/province/:id', _delete)

module.exports = router
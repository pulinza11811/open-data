const express = require('express')
const router = express.Router()
//
const { readProvince, listProvince, createProvince, updateProvince, _deleteProvince } = require('../controller/products')
const { readDistricts, listDistricts, createDistricts, updateDistricts,_deleteDistricts } = require('../controller/products')

router.get('/province', listProvince)
router.get('/province/:id',readProvince)
router.post('/province', createProvince)
router.put('/province/:id', updateProvince)
router.delete('/province/:id', _deleteProvince)

router.get('/districts', listDistricts)
router.get('/districts/:id',readDistricts)
router.post('/districts', createDistricts)
router.put('/districts/:id', updateDistricts)
router.delete('/districts/:id', _deleteDistricts)

module.exports = router
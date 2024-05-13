const express = require('express')
const router = express.Router()

const { readProvince, listProvince, createProvince, updateProvince, _deleteProvince } = require('../controller/product')
const { readDistricts, listDistricts, createDistricts, updateDistricts, _deleteDistricts } = require('../controller/product')
const { readSubdistricts, listSubdistricts, createSubdistricts, updateSubdistricts, _deleteSubdistricts } = require('../controller/product')

router.get('/province', listProvince)
router.get('/province/:id',readProvince)
router.post('/province', createProvince)
router.put('/province/:id', updateProvince)
router.delete('/province/:id', _deleteProvince)

router.get('/districts/page/:page', listDistricts);
router.get('/districts/:id',readDistricts)
router.post('/districts', createDistricts)
router.put('/districts/:id', updateDistricts)
router.delete('/districts/:id', _deleteDistricts)

router.get('/subdistricts/page/:page', listSubdistricts);
router.get('/subdistricts/:id',readSubdistricts)
router.post('/subdistricts', createSubdistricts)
router.put('/subdistricts/:id', updateSubdistricts)
router.delete('/subdistricts/:id', _deleteSubdistricts)

module.exports = router
const express = require('express')
const dataController = require('../controller/dataController')
const router = express.Router()

router.get('/', dataController.getDatas)
router.get('/:id', dataController.getData)
router.delete('/:id', dataController.deleteData)
router.put('/:id', dataController.updateData)
router.post('/', dataController.postData)

module.exports = router
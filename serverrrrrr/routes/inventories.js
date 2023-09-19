const express = require('express')

const router = express.Router()
const {
  createInventory,
  deleteInventory,
  getAllInventories,
  updateInventory,
  getInventory,
} = require('../controllers/inventories')

router.route('/').post(createInventory).get(getAllInventories)

router.route('/:id').get(getInventory).delete(deleteInventory).patch(updateInventory)

module.exports = router

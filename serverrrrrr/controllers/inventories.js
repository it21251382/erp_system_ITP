const Inventory = require('../models/Inventory')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllInventories = async (req, res) => {
  const inventories = await Inventory.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ inventories, count: inventories.length })
}
const getInventory = async (req, res) => {
  const {
    user: { userId },
    params: { id: inventoryId },
  } = req

  const inventory = await Inventory.findOne({
    _id: inventoryId,
    createdBy: userId,
  })
  if (!inventory) {
    throw new NotFoundError(`No inventory with id ${inventoryId}`)
  }
  res.status(StatusCodes.OK).json({ inventory })
}

const createInventory = async (req, res) => {
  req.body.createdBy = req.user.userId
  const inventory = await inventory.create(req.body)
  res.status(StatusCodes.CREATED).json({ inventory })
}

const updateInventory = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: inventoryId },
  } = req

  if (company === '' || position === '') {
    throw new BadRequestError('Company or Position fields cannot be empty')
  }
  const inventory = await Inventory.findByIdAndUpdate(
    { _id: inventoryId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )
  if (!inventory) {
    throw new NotFoundError(`No inventory with id ${inventoryId}`)
  }
  res.status(StatusCodes.OK).json({ inventory })
}

const deleteInventory = async (req, res) => {
  const {
    user: { userId },
    params: { id: inventoryId },
  } = req

  const inventory = await Inventory.findByIdAndRemove({
    _id: inventoryId,
    createdBy: userId,
  })
  if (!inventory) {
    throw new NotFoundError(`No inventory with id ${inventoryId}`)
  }
  res.status(StatusCodes.OK).send()
}

module.exports = {
  createInventory,
  deleteInventory,
  getAllInventories,
  updateInventory,
  getInventory,
}

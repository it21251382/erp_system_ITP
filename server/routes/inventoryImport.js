import express from "express"
const inventoryImportRouter = express.Router()

import { importInvFromSupPro } from "../controllers/inventoryImport.js"

inventoryImportRouter.route("/import").post(importInvFromSupPro)

export { inventoryImportRouter }
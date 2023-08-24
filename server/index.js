import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import orderRoutes from "./routes/order.js"
import inventoryRoutes from "./routes/inventory.js"
import supllierRoutes from "./routes/supplier.js"
import employeeRoutes from "./routes/employee.js"
import jobRoute from "./routes/job.js"
import customerRoutes from "./routes/customer.js"
import generalRoutes from "./routes/general.js"
import commerceRoutes from "./routes/commerce.js"

// Configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/order", orderRoutes) // Order management
app.use("/inventory", inventoryRoutes) //Inventory management
app.use("/supplier", supllierRoutes) // Supplier managemenr
app.use("/employee", employeeRoutes) // Employee management
app.use("/job", jobRoute) // Job management
app.use("/customer", customerRoutes) // Customer relation
app.use("/general", generalRoutes) // Dashboard
app.use("/commerce", commerceRoutes) // ecommerce ??


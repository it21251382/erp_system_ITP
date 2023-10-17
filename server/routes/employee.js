import { Router } from "express";
import { deleteEmployeeById, getAllEmployees, getAttendenceByEmployee, getEmployeeById, login, register, updateEmployeeById } from "../controllers/employee.js";

const employeeRouter = Router();

employeeRouter.post('/register', register);
employeeRouter.post('/login', login);
employeeRouter.get('/employees', getAllEmployees);
employeeRouter.get('/emp/:id', getEmployeeById);
employeeRouter.get('/attendence/:id', getAttendenceByEmployee);
employeeRouter.put('/update/:id', updateEmployeeById);
employeeRouter.delete('/delete/:id', deleteEmployeeById);

export default employeeRouter;

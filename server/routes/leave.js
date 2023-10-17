import { Router } from "express";
import { approveLeaveRequest, createLeaveRequest, getAllLeaveRequests, getLeaveRequestsByEmployee } from "../controllers/leave.js";

const leaveRouter = Router();

leaveRouter.post('/create', createLeaveRequest);
leaveRouter.put('/approve/:id/:approve', approveLeaveRequest);
leaveRouter.get('/all', getAllLeaveRequests);
leaveRouter.get('/emp/:id', getLeaveRequestsByEmployee);

export default leaveRouter;
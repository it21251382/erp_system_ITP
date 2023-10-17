import Leave from '../models/leave.js';

export const createLeaveRequest = async (req, res) => {
  try {
    const { employee, reason, date } = req.body;
    const leave = new Leave({
      employee,
      reason,
      date,
      status: "PENDING",
    });
    await leave.save();
    res.status(201).json({ message: "Leave Request Created Successfully.", data: leave });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const getAllLeaveRequests = async (req, res) => {
  try {
    const leaves = await Leave.find().populate('employee');
    res.status(200).json({ data: leaves, message: "Successfully fetched data" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const getLeaveRequestsByEmployee = async (req, res) => {
  try {

    const id = req.params.id;

    const leaves = await Leave.find({ employee: id }).populate('employee');
    res.status(200).json({ data: leaves, message: "Successfully fetched data" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const approveLeaveRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const approve = req.params.approve;
    const leave = await Leave.findByIdAndUpdate(
      id,
      {
        isApproved: approve === '1' ? true : false,
        status: approve === '1' ? 'APPROVED' : 'REJECTED',
      },
      { new: true },
    );

    if (!leave) {
      return res.status(400).json({ message: "Leave Request not found" });
    }

    res.status(201).json({ message: "Leave Request Approved Successfully.", data: leave });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}
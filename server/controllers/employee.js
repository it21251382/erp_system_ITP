import Employee from '../models/employee.js';
import Generator from '../models/generator.js';
import Attendence from '../models/attendence.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const { email, password, name, image, role, telephone } = req.body;

    const isUser = await Employee.findOne({ email: email.toLowerCase() });

    if (isUser) {
      res.status(400).json({ message: "Email is Already in Use." });
    } else {

      // generate emp id
      let generator = null;
      let empId = '';

      generator = await getGeneratorByName("EMP");
      if (!generator) {
        await createNewGenerator("EMP", 1, 1);
        empId = "EMP001";
      } else {
        empId = "EMP" + (generator.currentNumber + 1).toString().padStart(3, '0');
        await updateGenerator("EMP", 1, generator.currentNumber + 1);
      }

      const employee = new Employee({
        email: email.toLowerCase(),
        password: await bcrypt.hash(password, 10),
        name,
        empNo: empId,
        role,
        image,
        telephone,
      });

      await employee.save();
      res.status(201).json({ message: "Account Created Successfully.", data: employee });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Employee.findOne({ email: email.toLowerCase() });

    if (!user) {
      res.status(400).json({ message: 'Invalid Email. Please Try Again.' });
    } else {
      const isPassword = await bcrypt.compare(password, user.password);
      if (isPassword) {
        await markAttendence(user._id);
        res.status(200).json({ data: user, message: 'Successfully Logged In' });
      } else {
        res.status(400).json({ message: 'Invalid Password. Please Try Again.' });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const getAllEmployees = async (req, res) => {
  try {

    const search = req.query?.search;

    let employees = null;
    if (search) {
      employees = await Employee.find({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { empNo: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
        ],
      });
    } else {
      employees = await Employee.find();
    }
    res.status(200).json({ data: employees, message: "Successfully fetched data" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const getEmployeeById = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.findById(id);
    res.status(200).json({ data: employee, message: "Successfully fetched data" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const deleteEmployeeById = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    res.status(200).json({ data: employee, message: "Successfully deleted data" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const updateEmployeeById = async (req, res) => {
  try {
    const { name, image, telephone } = req.body;
    const id = req.params.id;

    const employee = await Employee.findByIdAndUpdate(
      id,
      { name, telephone, image, },
      { new: true },
    );

    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }

    res.status(201).json({ message: "Account Updated Successfully.", data: employee });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

export const getAttendenceByEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const attendence = await Attendence.find({ employee: id });
    res.status(200).json({ data: attendence, message: "Successfully fetched data" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err, message: "Something went wrong!" });
  }
}

const createNewGenerator = async (name, currentLetter, currentNumber) => {
  try {
    const generator = new Generator({
      name,
      currentLetter,
      currentNumber
    });
    await generator.save();

  } catch (err) {
    console.log(err);
  }
};

const getGeneratorByName = async (name) => {
  try {
    const generator = await Generator.findOne({ name });
    if (generator) {
      return generator;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
}

const updateGenerator = async (name, currentLetter, currentNumber) => {
  try {
    const generator = await Generator.findOne({ name });
    generator.currentLetter = currentLetter;
    generator.currentNumber = currentNumber;
    await generator.save();
  } catch (err) {
    console.log(err);
  }
}

const markAttendence = async (id) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date();
    tomorrow.setHours(23, 59, 59, 0);

    const isAttendence = await Attendence.findOne({
      employee: id,
      date: { $gte: today, $lt: tomorrow },
    });

    if (!isAttendence) {
      const attendence = new Attendence({
        employee: id,
        date: new Date(),
      });
      await attendence.save();
      console.log("Attendence saved.");
    }
  } catch (err) {
    console.log(err);
  }
}
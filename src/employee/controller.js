const pool = require("../../database");
const queries = require("./queries");

// Getting employee data
const getEmployee = (req, res) => {
 pool.query(queries.getEmployee, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Adding new employee to db
const addNewEmployee = (req, res) => {
 const { name, email, position, access_level, phone_number } = req.body;
 // Checking email
 pool.query(queries.checkIfEmailExists, [email], (error, results) => {
  if (results.rows.length) {
   res.send("Email exists in the system");
  }
  // Add employee to db
  pool.query(queries.addEmployee, [name, email, position, access_level, phone_number], (error, results) => {
   if (error) {
    console.log(error);
   }
   res.status(201).send("Employee added");
   console.log("Added", results);
  });
 });
};

// Getting single employee
const getEmployeeById = (req, res) => {
 const id = parseInt(req.params.id);
 pool.query(queries.getEmployeeById, [id], (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Removing employee from db
const removeEmployee = (req, res) => {
 const id = parseInt(req.params.id);
 // Checking if the employee is in the system
 pool.query(queries.getEmployeeById, [id], (error, results) => {
  const noEmployeeFound = !results.rows.length;
  if (noEmployeeFound) {
   res.send("There is no employee found in the system");
  }

  // Removing employee from db
  pool.query(queries.removeEmployee, [id], (error, results) => {
   if (error) throw error;
   res.status(200).send("The employee data was removed");
  });
 });
};

// Editing employee from db
const editEmployee = (req, res) => {
 const id = parseInt(req.params.id);
 const { name, email, position, access_level, phone_number } = req.body;
 // Checking if the employee is in the system
 pool.query(queries.getEmployeeById, [id], (error, results) => {
  const noEmployeeFound = !results.rows.length;
  if (noEmployeeFound) {
   res.send("There is no employee found in the system");
  }

  // Updating name
  pool.query(queries.editEmployee, [name, id], (error, results) => {
   if (error) throw error;
   res.status(200).send("Employee name updated");
  });
 });
};

// Exporting functions
module.exports = {
 getEmployee,
 getEmployeeById,
 addNewEmployee,
 removeEmployee,
 editEmployee,
};

/* 

  // Updating email
  pool.query(queries.editEmployee, [email], (error, results) => {
   if (error) throw error;
   res.status(200).send("Employee email updated");
  });

  // Updating position
  pool.query(queries.editEmployee, [position], (error, results) => {
   if (error) throw error;
   res.status(200).send("Employee position updated");
  });

  // Updating access level
  pool.query(queries.editEmployee, [access_level], (error, results) => {
   if (error) throw error;
   res.status(200).send("Employee access level updated");
  });

  // Updating phone number
  pool.query(queries.editEmployee, [phone_number], (error, results) => {
   if (error) throw error;
   res.status(200).send("Employee phone number updated");
  });
*/

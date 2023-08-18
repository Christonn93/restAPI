const getEmployee = "SELECT * FROM employee_data";
const getEmployeeById = "SELECT * FROM employee_data WHERE id = $1";
const checkIfEmailExists = "SELECT s FROM employee_data s WHERE s.email = $1";
const addEmployee = "INSERT INTO employee_data (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const removeEmployee = "DELETE FROM employee_data WHERE id = $1";
const editEmployee = "UPDATE employee_data SET name = $1 WHERE id = $2";

module.exports = {
 getEmployee,
 getEmployeeById,
 checkIfEmailExists,
 addEmployee,
 editEmployee,
 removeEmployee,
};

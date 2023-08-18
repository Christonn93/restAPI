const express = require("express");
const usersRoutes = require("./src/users/routes");
const employeeRoutes = require("./src/employee/routes");

const app = express();
const port = 3200;

app.use(express.json())

app.get("/", (req, res) => {
 res.send("hello user");
});

// Routes for user data
app.use("/api/v1/users/", usersRoutes);

// Routes for employee data
app.use("/api/v1/employee/", employeeRoutes);

app.listen(port, () => console.log(`app listening to port ${port}`));

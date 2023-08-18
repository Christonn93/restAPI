const express = require("express");
const usersRoutes = require("./src/users/routes");
const employeeRoutes = require("./src/employee/routes");
const bookingRoutes = require("./src/booking/routes");
const customerRoutes = require("./src/customer/routes");
const supplierRoutes = require("./src/suppliers/routes");
const ordersRoutes = require("./src/orders/routes");
const productsRoutes = require("./src/products/routes");
const internalControlRoutes = require("./src/internalControl/routes");
const fridgeRoutes = require("./src/internalControl/fridgeData/routes");
const recipeRoutes = require("./src/recipe/routes");

const app = express();
const port = 3200;

app.use(express.json());

app.get("/api/v1/", (req, res) => {
 res.status(200).send("Api is responding with connected");
 res.status(201).send("Api is responding with success");
 res.status(404).send("Api is responding with fault 404");
});

// ---- Routes for system ---- //

// Routes for user data
app.use("/api/v1/users/", usersRoutes);

// Routes for employee data
app.use("/api/v1/employee/", employeeRoutes);

// ---- Routes for booking system ---- //

// Routes for booking data
app.use("/api/v1/booking/", bookingRoutes);

// Routes for customer data
app.use("/api/v1/customer/", customerRoutes);

// ---- Routes for ordering system ---- //

// Routes for supplier data
app.use("/api/v1/supplier/", supplierRoutes);

// Routes for orders data
app.use("/api/v1/orders/", ordersRoutes);

// Routes for products data
app.use("/api/v1/products/", productsRoutes);

// ---- Routes for internal control system ---- //

// Routes for internalControl data
app.use("/api/v1/internalControl/", internalControlRoutes);

// Routes for fridge data
app.use("/api/v1/internalControl/fridge/", fridgeRoutes);

// ---- Routes for recipe system ---- //

// Routes for recipe data
app.use("/api/v1/recipe/", recipeRoutes);

app.listen(port, () => console.log(`app listening to port ${port}`));

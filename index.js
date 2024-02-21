const express = require("express");
const restaurantController = require("./controllers/restaurantController");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to search restaurants
app.get("/api/restaurants", restaurantController.getRestaurants);

// Endpoint to retrieve a restaurant by ID
app.get("/api/restaurants/:id", restaurantController.getRestaurant);

// Start the server
app.listen(3002, () => {
  console.log(`Server is running on http://localhost:3002`);
});

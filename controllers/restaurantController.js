const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// Initialize Supabase client
const supabaseUrl = process.env.URL;
const supabaseKey = process.env.KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.getRestaurants = async (req, res) => {
  try {
    // Extract query parameters
    const {
      cuisine,
      location,
      dietaryPreference,
      page = 1,
      limit = 10,
    } = req.query;

    // Start building the query
    let query = supabase.from("restaurants").select("*");

    // Apply filters based on query parameters
    if (cuisine) {
      query = query.eq("cuisine", cuisine);
    }

    if (dietaryPreference) {
      // Filter based on dietary preference
      query = query.eq("dietary_preference", dietaryPreference);
    }

    // Execute the query
    const { data, error } = await query.range(
      (page - 1) * limit,
      page * limit - 1
    );

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error("Error searching restaurants:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("restaurants")
      .select("*")
      .eq("id", id);

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.json(data[0]);
  } catch (error) {
    console.error("Error retrieving restaurant:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

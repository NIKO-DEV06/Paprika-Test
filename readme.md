# Restaurant Search Backend

This backend system facilitates restaurant searches based on various criteria such as cuisine type, dietary preferences, and more. The system supports flexible query capabilities and pagination to efficiently manage large datasets.

## Table of Contents

1. [Technical Overview](#technical-overview)
2. [API Endpoints](#api-endpoints)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Future Improvements](#future-improvements)

## Technical Overview

- **Backend Setup**: Developed using Node.js and Express framework.
- **Database**: PostgreSQL database is utilized, with Supabase as the chosen option for database interaction.
- **Search Functionality**: Implemented endpoints for searching restaurants based on cuisine type, dietary preferences, etc.
- **Pagination**: Implemented pagination to handle large datasets effectively.
- **Validation**: Input parameter validation is not implemented in this version but can be added as a future improvement.

## API Endpoints

- **GET /api/restaurants**: Retrieves a list of restaurants based on specified criteria.
  - Query Parameters:
    - `cuisine`: Cuisine type to filter restaurants.
    - `dietaryPreference`: Dietary preference to filter restaurants.
    - `page`: Page number for pagination (default: 1).
    - `limit`: Number of items per page (default: 10).
- **GET /api/restaurants/:id**: Retrieves details of a specific restaurant by ID.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Set up Environment Variables

1. Create a `.env` file in the root directory.
2. Add the following variables to the `.env` file:
   ```plaintext
   URL=your_supabase_url
   KEY=your_supabase_key
   ```

```bash
  npm start
```

## Future Improvements

- Implement input parameter validation to ensure data integrity and security.
- Incorporate geolocation search functionality for location-based searches.
- Enhance query capabilities to support additional search criteria such as restaurant rating or price range.

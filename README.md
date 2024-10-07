# E-Commerce Website

This is a full-stack e-commerce website built using React for the frontend, React + Vite for the admin panel, and MongoDB for the database. The application allows customers to browse and purchase products while administrators can manage products and pricing through a dedicated admin panel.

## Features

- **Frontend**: Customers can view, search, and purchase products.
- **Backend**: Handles data storage and interactions with MongoDB.
- **Admin Panel**: Allows the admin to add, update, and delete products, as well as manage item costs and inventory.

## Technologies Used

- **Frontend**: React
- **Admin Panel**: React + Vite
- **Database**: MongoDB
- **Testing**: Thunder Client

## Project Structure

- `/frontend`: Contains the React code for the customer-facing portion of the website.
- `/admin`: Contains the React + Vite code for the admin panel.
- `/backend`: Handles the server-side operations and database management.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-project.git
    cd ecommerce-project
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    # Frontend
    cd frontend
    npm install

    # Admin Panel
    cd ../admin
    npm install

    # Backend
    cd ../backend
    npm install
    ```

3. Set up MongoDB:
    - Ensure MongoDB is installed and running.
    - Update your MongoDB URI in the `backend` configuration file.

4. Start the frontend, backend, and admin panel:
    ```bash
    # Frontend
    cd frontend
    npm start

    # Backend
    cd ../backend
    npm run server

    # Admin Panel
    cd ../admin
    npm run dev
    ```

## Testing

Use Thunder Client to test the backend API endpoints.

## Contributing

Feel free to submit issues and pull requests for enhancements or bug fixes.


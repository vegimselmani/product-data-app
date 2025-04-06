Product List Application

This project is a Product List component that allows users to search, filter and view products. It also implements infinite scrolling for dynamically loading more products as the user scrolls down. The app supports filtering by search term, brand, gender and size.

Features
-Infinite Scroll: Automatically loads more products as the user scrolls.
-Filters: Users can filter products by:
    -Search Term: Filter products by title.
    -Brand: Filter by brand (e.g., Adidas, Kenzo).
    -Gender: Filter by gender (e.g., male, female, unisex).
    -Sizes: Filter by product size (e.g., S, M, L, XL).
-Error Handling: If there is an error fetching products, an alert message is displayed.
-Product Display: Each product is shown with details like its title, description, price, image and a link to view the product.

Technologies Used
-React: JavaScript library for building user interfaces.
-Material-UI: React component library for UI elements.
-Axios: Promise-based HTTP client for making API requests.
-Infinite Scroll: React component for infinite scrolling functionality.

Installation
    1. git clone https://github.com/your-username/product-list-app.git
    2. cd product-list-app
    3. npm install
    4. npm run dev
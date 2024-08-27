export const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:5001"
    : "https://www.example.com";
export const PRODUCT_URL = "/api/products";
export const USERS_URL = "/api/users";
export const URDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config//paypal";

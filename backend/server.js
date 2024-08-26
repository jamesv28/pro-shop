import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDb();
const port = process.env.PORT || 5001;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

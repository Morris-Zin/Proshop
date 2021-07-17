const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => res.send("Api is alive"));
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//404

app.use(notFound);

//Error handling midddleware

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});

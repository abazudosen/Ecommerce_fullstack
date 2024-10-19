import express from "express";
import productsRoutes from "./routes/products/index.js";

const port = 3000;
const app = express();

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello World!");
});

app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

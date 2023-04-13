import express  from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import productrouter from './Routes/productroute.js';
import categoryrouter from './Routes/categoryroute.js'


dotenv.config();

connectDB();

const app = express();
const port=process.env.PORT || 3000;

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
}

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello rayan !!!!!!!");
});
// app.use("/admin", adminRouter);
app.use("/product", productrouter);
app.use("/category",categoryrouter );

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
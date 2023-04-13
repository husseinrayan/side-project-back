import Product from "../Models/productmodel.js";
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT;

const getAllProduct = async (req, res, next) => {
    try {
      let response = await Product.find();
      res.status(200).send({ success: true, response });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
  };
  
  
  
  const getProduct = async (req, res, next) => {
    try {
      let { id } = req.params;
      let response = await Product.findOne({ _id: id });
      res.status(200).send({ success: true, response });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
  };

  
  const addProduct = async (req, res, next) => {
    let body = req.body;
    try {
      let newProduct = new Product(body);
      let response = await newProduct.save();
      res.status(201).send({ success: true, response });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
  };
  

  
  const putProduct = async (req, res) => {
    let id = req.params.id;
    let data = req.body;
  
    try {
      console.log("data", data);
      let response = await Product.updateOne({ _id: id }, { $set: data });
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(400).send({ error: true, error });
    }
  };
  

  
  const deleteProduct= async (req, res, next) => {
    let id = req.params.id;
    try {
      let response = await Product.findByIdAndRemove({ _id: id });
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(400).send({ error: true, error });
    }
  };
  
  export default {
    getAllProduct,
    getProduct,
    addProduct,
    putProduct,
    deleteProduct,
  };
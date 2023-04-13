import Category from "../Models/categorymodel.js";
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT;

const getAllCategory = async (req, res, next) => {
    try {
      let response = await Category.find();
      res.status(200).send({ success: true, response });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
  };
  
  
  
  const getCategory = async (req, res, next) => {
    try {
      let { id } = req.params;
      let response = await Category.findOne({ _id: id });
      res.status(200).send({ success: true, response });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
  };

  
  const addCategory = async (req, res, next) => {
    let body = req.body;
    try {
      let newCategory = new Category(body);
      let response = await newCategory.save();
      res.status(201).send({ success: true, response });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
  };
  

  
  const putCategory = async (req, res) => {
    let id = req.params.id;
    let data = req.body;
  
    try {
      console.log("data", data);
      let response = await Category.updateOne({ _id: id }, { $set: data });
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(400).send({ error: true, error });
    }
  };
  

  
  const deleteCategory= async (req, res, next) => {
    let id = req.params.id;
    try {
      let response = await Category.findByIdAndRemove({ _id: id });
      res.status(200).send({ success: true, response });
    } catch (error) {
      res.status(400).send({ error: true, error });
    }
  };
  
  export default {
    getAllCategory,
    getCategory,
    addCategory,
    putCategory,
    deleteCategory,
  };
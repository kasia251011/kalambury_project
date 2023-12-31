import { Request, Response } from "express";
import CategorySchema from "../model/Category.model";
import Category from "../model/Category.model";
import mongoose from "mongoose";

export const getCategory = (req: Request, res: Response) => {

  return CategorySchema.findById(req.params.id)
  .then((category) => { res.status(201).json( category ) })
  .catch((error) => { res.status(500).json({ error }) })
};

export const getCategories = (req: Request, res: Response) => {

  return CategorySchema.find()
  .then((category) => { res.status(201).json( category ) })
  .catch((error) => { res.status(500).json({ error }) })
};

export const addCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  const cat = await CategorySchema.findOne({ name }); // Check if category with the same name already exists
  if (cat) {
    return res.status(403).json({ error: 'Category already exists' });
  } else {
    const category = new Category({
      id: new mongoose.Types.ObjectId(),
      ...req.body
    })

    return category.save()
      .then((category) => { res.status(201).json(category); })
      .catch((error) => { res.status(500).json(error); });
  }
};


// export const addCategory = (req: Request, res: Response) => {
//   const category = new Category({
//     id: new mongoose.Types.ObjectId(),
//     ...req.body
//   })

//   return category.save()
//     .then((category) => { res.status(201).json( category ) })
//     .catch((error) => { res.status(500).json( error ) })
// };

export const updateCategory = (req: Request, res: Response) => {
  const category = new Category({
    ...req.body
  })

  return Category.findByIdAndUpdate(category.id, category)
    .then((category) => { res.status(201).json( category ) })
    .catch((error) => { res.status(500).json( error ) })
};

export const deleteCategory = async (req: Request, res: Response) => {

  return Category.findByIdAndDelete(req.params.id)
  .then((category) => { res.status(201).json( category ) })
  .catch((error) => { res.status(500).json({ error }) })
};
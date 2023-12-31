import { Request, Response } from "express";
import SloganSchema from "../model/Slogan.model";
import Slogan from "../model/Slogan.model";
import mongoose from "mongoose";

export const getSlogan = async (req: Request, res: Response) => {

  const count = await SloganSchema.countDocuments();
  const randomIndex = Math.floor(Math.random() * count);

  return SloganSchema.findOne().skip(randomIndex)
  .then((slogan) => { res.status(201).json( slogan ) })
  .catch((error) => { res.status(500).json({ error }) })
};


export const getAllSlogans = async (req: Request, res: Response) => {

  return SloganSchema.find()
  .then((slogan) => { res.status(201).json( slogan ) })
  .catch((error) => { res.status(500).json({ error }) })
};

export const getAllSlogansByCategory = async (req: Request, res: Response) => {

  return SloganSchema.find({categoryId: req.params.id})
  .then((slogan) => { res.status(201).json( slogan ) })
  .catch((error) => { res.status(500).json({ error }) })
};

export const addSlogan = async (req: Request, res: Response) => {
  const { name } = req.body;

  const cat = await SloganSchema.findOne({ name }); // Check if slogan with the same name already exists
  if (cat) {
    return res.status(403).json({ error: 'Slogan already exists' });
  } else {
    const slogan = new Slogan({
      id: new mongoose.Types.ObjectId(),
      ...req.body
    })

    return slogan.save()
      .then((slogan) => { res.status(201).json(slogan); })
      .catch((error) => { res.status(500).json(error); });
  }
};

// export const addSlogan = (req: Request, res: Response) => {
//   const slogan = new Slogan({
//     id: new mongoose.Types.ObjectId(),
//     ...req.body
//   })

//   return slogan.save()
//     .then((slogan) => { res.status(201).json( slogan ) })
//     .catch((error) => { res.status(500).json( error ) })
// };

export const updateSlogan = (req: Request, res: Response) => {
  const slogan = new Slogan({
    ...req.body
  })

  return Slogan.findByIdAndUpdate(slogan.id, slogan)
    .then((slogan) => { res.status(201).json( slogan ) })
    .catch((error) => { res.status(500).json( error ) })
};

export const deleteSlogan = async (req: Request, res: Response) => {

  return SloganSchema.findByIdAndDelete(req.params.id)
  .then((slogan) => { res.status(201).json( slogan ) })
  .catch((error) => { res.status(500).json({ error }) })
};
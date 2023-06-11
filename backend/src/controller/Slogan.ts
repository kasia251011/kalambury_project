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

export const addSlogan = (req: Request, res: Response) => {
  const slogan = new Slogan({
    id: new mongoose.Types.ObjectId(),
    ...req.body
  })

  return slogan.save()
    .then((slogan) => { res.status(201).json( slogan ) })
    .catch((error) => { res.status(500).json( error ) })
};
import mongoose from 'mongoose';

export interface Category {
  name: string
}

export interface CategoryModel extends Category, Document {};

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
})

export default mongoose.model<CategoryModel>('Category', categorySchema);
import mongoose, { Schema } from 'mongoose';

export interface Slogan {
  name: string,
  categoryId: string
}

export interface SloganModel extends Slogan, Document {};

const sloganSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  categoryId: { type: Schema.Types.ObjectId, required: true, ref: 'Category' }

})

export default mongoose.model<SloganModel>('Slogan', sloganSchema);
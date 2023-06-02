import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICode extends Document {
  fileName: string;
  code: string;
  userId: string,
}

const codeSchema: Schema<ICode> = new Schema<ICode>({
  fileName: { type: String, required: true },
  code: { type: String, required: true },
  userId: { type: String, required: true },
});

const Code: Model<ICode> = mongoose.model<ICode>("Code", codeSchema);

export default Code;

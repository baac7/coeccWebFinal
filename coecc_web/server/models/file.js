import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  creator: { type: String, required: true},
  name: { type: String},
  fileTitle: { type: String, required: true },
  fileDescription: String,
  fileItself: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const File = mongoose.model("File", fileSchema);

export default File;

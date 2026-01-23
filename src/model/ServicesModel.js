import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  descrition: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Services = mongoose.model("Services", servicesSchema);
export default Services;

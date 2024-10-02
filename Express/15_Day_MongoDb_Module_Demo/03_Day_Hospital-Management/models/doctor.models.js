import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    experienceInYears: {
      type: Number,
      default: 0,
    },

    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospital",
      },
    ],
  },
  { timestamps: true }
);

export const doctor = mongoose.model("doctor", doctorSchema);

import mongoose from "mongoose";

const violationSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
    },
    violationType: {
      type: String,
      required: true,
    },
    fineAmount: {
      type: Number,
      required: true,
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    issuedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Violation = mongoose.model("Violation", violationSchema);
export default Violation;

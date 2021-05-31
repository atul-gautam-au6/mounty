import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    mobile: {
      type: String,
      unique: true,
      require: true,
    },
    address: {
      street: String,
      locality: String,
      city: String,
      state: String,
      pincode: String,
      coordinatesType: String,
      coordinates: [Number],
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;

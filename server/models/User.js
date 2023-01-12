import mongoose from 'mongoose';

const Userschema = new mongoose.Schema(
      {
            firstName: {
                  type: String,
                  required: true,
                  min: 2,
                  max: 50,
            },
            lastName: {
                  type: String,
                  required: true,
                  min: 2,
                  max: 50,
            },
            email: {
                  type: String,
                  required: true,
                  unique: true,
            },
            password: {
                  type: String,
                  required: true,
                  min: 5,
            },
            PicturePath: {
                  type: String,
                  default: "",
            },
            friends: {
                  type: Array,
                  default: [],
            },
            location: String,
            occupation: String,
            viewedProfile: Number,
            impressions: Number,
      },
      { timestamps: true }
)
const user= mongoose.model("User",Userschema);
export default user;
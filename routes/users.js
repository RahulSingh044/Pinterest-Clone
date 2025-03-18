const mongoose =require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb+srv://rahulsinghdev36:azadD-407@cluster0.qxlum.mongodb.net/Pinterest");

const userSchema = mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password: String,
  dob: String,
  profileImage: String,
  boards: {
    type: Array,
    default: []
  },
  posts : [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
   }
  ]
});

userSchema.plugin(plm);

module.exports =  mongoose.model("user",userSchema);
const mongoose = require("mongoose");
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mobileNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const candidateSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    validate: {
      validator: function (value) {
        return passwordRegex.test(value);
      },
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.",
    },
  },
  number: {
    type: String,
    required: [true, "Mobile number is required"],
    unique: true, // Ensures that each mobile number is unique in the database
    validate: {
      validator: function (value) {
        return mobileNumberRegex.test(value);
      },
      message: "Please enter a valid mobile number.",
    },
  },
  address: {
    type:String,
    trim:true,
    required:true
  },
  city: {
    type:String,
    trim:true,
    required:true
  },
  graduation: {
    type:String,
    required:true
  },
  company: {
    type:String,
    required:true
  },
  experience: {
    type:Number,
    required:true
  },
});
module.exports=mongoose.model('CandidateInfo',candidateSchema)

import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Please enter your name."],
    trim: true,
    // minLength: [2, "Name must be larger than 2 characters"],
    // maxLength: [50, "Name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Please enter your email."],
    unique: true,
    // match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  phonenumber: {
    type: Number,
    required: [true, "Please enter your phone number."],
    trim: true,
    // cast: '{VALUE} is not a number',
    // validate: {
    //   validator: function(v) {
    //     return v.toString().length == 10;
    //   },
    //   message: props => `${props.value} is not a valid phone number!`
    // }
    // minLength: [9, "Please enter a valid phone number"],
    // maxLength: [11, "Please enter a valid phone number"],
  },

  collegename: {
    type: String,
    required: [true, "Please enter your college name."],
    trim: true,
    // minLength: [2, "College Name must be larger than 2 characters"],
    // maxLength: [100, "College Name must be lesser than 100 characters"],
  },

  department: {
    type: String,
    required: [true, "Please enter your department."],
    trim: true,
    // minLength: [2, "Department must be larger than 2 characters"],
    // maxLength: [50, "Department must be lesser than 50 characters"],
  },

  year: {
    type: String,
    required: [true, "Please select your year of study."],
    trim: true,
    // maxLength: [1, "Name must be lesser than 50 characters"],
  },

  eventname: {
    type: String,
    required: [true, "Event is required."],
    trim: true,
    // minLength: [2, "Name must be larger than 2 characters"],
    // maxLength: [50, "Name must be lesser than 50 characters"],
  },

  paymentfile: {
    type: String,
    required: [true, "Paymentfile is required."],
    // trim: true,
    // minLength: [2, "Name must be larger than 2 characters"],
    // maxLength: [50, "Name must be lesser than 50 characters"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/registration";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { fullname, teammembers, email, phonenumber, collegename, department, year, eventname, paymentfile } = await req.json();

  try {
    await connectDB();

    if(email && phonenumber && eventname){
      var alreadyRegistered = await Contact.findOne({email, phonenumber, eventname});    
      if(alreadyRegistered){
        return NextResponse.json({ msg: ["Email and phone number is already registered for this event"] });
      }
      var emailExists = await Contact.findOne({email, eventname});  
      if(emailExists){
        return NextResponse.json({ msg: ["Email is already registered for this event"] });
      }
      var phoneNumberExists = await Contact.findOne({phonenumber, eventname});  
      if(phoneNumberExists){
        return NextResponse.json({ msg: ["Phone number is already registered for this event"] });
      }
    }

    await Contact.create({ fullname, teammembers, email, phonenumber, collegename, department, year, eventname, paymentfile });

    await sendConfirmationEmail(email, eventname);

    return NextResponse.json({
      msg: ["Registered successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      console.log(error);
      return NextResponse.json({ msg: ["Unable to register."] });
    }
  }
}

async function sendConfirmationEmail(email, eventname) {
  // Configure Nodemailer with your email service details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'icon2k24symposium@gmail.com',
      pass: 'rvnlkvmsxexhpkfp',
    },
  });

  // Email setup
  const mailOptions = {
    from: 'your@icon2k24symposium@gmail.com.com',
    to: email,
    subject: `Confirmation for ${eventname} Registration`,
    text: `Dear ,
    I hope this email finds you well. On behalf of the Icon team, I would like to express our sincere gratitude for registering to attend our upcoming symposium.
    
    Here are some important details regarding the symposium:
    
    Date: 08/02/2024
    Time: 09:00 AM
    Venue: Convention centre - Crescent university
    If you have any specific questions or if there is anything we can do to enhance your experience at the symposium, please don't hesitate to reach out to us at icon2k24symposium@gmail.com or just make a call to the undersigned
    
    Choumya : 8925059696
    Salman fariz: 6380393289
    You will be receiving your Event Pass for your registered event within 24hrs.
    
     
    
    Best regards,
    
    Team Icon ${eventname}!`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}


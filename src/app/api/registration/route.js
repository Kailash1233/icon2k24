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
      var alreadyRegistered = await Contact.findOne({email:email, phonenumber:phonenumber, eventname:eventname});    
      if(alreadyRegistered){
        return NextResponse.json({ msg: ["Email and phone number is already registered for this event"] });
      }
      var emailExists = await Contact.findOne({email:email, eventname:eventname});  
      if(emailExists){
        return NextResponse.json({ msg: ["Email is already registered for this event"] });
      }
      var phoneNumberExists = await Contact.findOne({phonenumber:phonenumber, eventname:eventname});  
      if(phoneNumberExists){
        return NextResponse.json({ msg: ["Phone number is already registered for this event"] });
      }
    }

    await Contact.create({ fullname, teammembers, email, phonenumber, collegename, department, year, eventname, paymentfile });

    await sendConfirmationEmail(fullname, email);

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
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      console.log(error);
      return NextResponse.json({ msg: ["Unable to register."] });
    }
  }
}

async function sendConfirmationEmail(fullname, email) {
  // Configure Nodemailer with your email service details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD
    },
  });

  // Email setup
  const mailOptions = {
    from: 'your@icon2k24symposium@gmail.com',
  to: email,
  subject: `Confirmation for ICON Registration`,
  html: `Dear <b>${fullname}</b>,

<p>We trust this message finds you well. On behalf of <b>Team ICON</b>, we extend our sincere appreciation for registering to attend our upcoming symposium.</p>

<p><span style="font-weight: bold; background-color: yellow;">Key Details:</span><br>
- Date: 08/02/2024<br>
- Time: 09:00 AM<br>
- Venue: Convention Centre, B.S.Abdur Rahman Crescent Institute of Science and Technology</p>

<p>For any inquiries or to enhance your symposium experience, please contact us at icon2k24symposium@gmail.com or call the undersigned team members:<br>
- Choumya: +91 8925059696<br>
- Salman Fariz: +91 6380393289</p>

<p>Your Event Pass for the registered event will be dispatched within 24 hours.</p>

<p>Best Regards,<br>
Team ICON</p>`
};

  // Send the email
  await transporter.sendMail(mailOptions);
}


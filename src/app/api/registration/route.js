import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/registration";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, phonenumber, collegename, department, year, eventname, paymentfile } = await req.json();

  try {
    // await connectDB();

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

    await Contact.create({ fullname, email, phonenumber, collegename, department, year, eventname, paymentfile });

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
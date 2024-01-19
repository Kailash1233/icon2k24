import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/registration";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req) {

  try {
    await connectDB();

    // var data = await Contact.findOne();

    // console.log("Connected successfully", data);

    return NextResponse.json({
      msg: ["Connected successfully"],
      success: true
    });
  } catch (error) {
      console.log(error);
      return NextResponse.json({ msg: error });
  }
}
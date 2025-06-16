import { connectToDB } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const {email,password} = await request.json();
        if (!email|| !password){
            return NextResponse.json({error:"Email and password are required"},
            {status:400}
        )}
        await connectToDB();

        const existingUser = await User.findOne({email})
        if (existingUser){
            return NextResponse.json({error:"Email is already registered"},
            {status:400}
        )}

        await User.create({
            email,
            password
        })
        return NextResponse.json(
            {message:"User registered successfully"},
            {status:201}
        )

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {error:"failed to register user"},
            {status:500}
        )
    }
}
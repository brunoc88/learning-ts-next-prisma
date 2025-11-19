import { NextResponse } from "next/server";

export const GET = async() => {
    try {
        
        return NextResponse.json('hola',{status:200})
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}
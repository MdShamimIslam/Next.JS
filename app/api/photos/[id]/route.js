import { getPhotoById } from "@/lib/image-data"
import { NextResponse } from "next/server";

export const GET = async(_request,{params})=>{
    const photo = await getPhotoById(params.id);
    return NextResponse.json(photo);
}
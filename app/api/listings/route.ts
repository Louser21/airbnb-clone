import { NextResponse } from "next/server";
import client from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    req : Request
) {
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();
    }

    const body = await req.json();

    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        guestCount,
        bathroomCount,
        location,
        price
    } = body;

    // Object.keys(body).forEach( (val : any) =>{
    //     if(!body[val]){
    //         return NextResponse.error();
    //     }
    // })

    const listing = await client.listing.create({
        data : {
            title,
            description,
            category,
            imageSrc,
            roomCount,
            guestCount,
            bathroomCount,
            locationValue : location.value,
            price : parseInt(price,10),
            userId : currentUser.id,
        }
    })

    return NextResponse.json(listing);
}
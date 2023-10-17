import { createProducts, faker } from "@/features/createProduct";
import { NextResponse } from "next/server"


export function GET() {
    const products = createProducts({faker, count: 50 })

    return NextResponse .json(
        { data: Array.from(products.values())},
        { status: 200},    
    )
}
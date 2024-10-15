/* eslint-disable @typescript-eslint/no-unused-vars */

import { bikeProducts, home_products } from "@/utils/data";
import { Product } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
 return NextResponse.json(bikeProducts)
}



// //* Dto = Data transfer object
// interface CreateProductDto {
//  id: number;
//  name: string;
//  price: number;
//  des?: string
// }

// export async function POST(request: NextRequest) {
//  const body = (await request.json()) as CreateProductDto

//  const newProduct: Product = {
//   id: bikeProducts.length + 1,
//   name: "best bike",
//   price: 233,
//   des: "dsadfsfdsfsf lorem loremlorem lorem  dsfsfsdf"
//  }

//  bikeProducts.push(newProduct)
//  return NextResponse.json({ message: 'created' }, { status: 201 })
// }

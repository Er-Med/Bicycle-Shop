import { bikeProducts } from "@/utils/data";

export async function GET(
 request: Request,
 { params }: { params: { id: string } }
) {

 const product = bikeProducts.find((product) => product.id === parseInt(params.id))

 return Response.json(product)
}
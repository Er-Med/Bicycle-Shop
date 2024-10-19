import { DOMAIN } from "@/utils/constants";

export async function getBikeProducts() {
 const response = await fetch(`${DOMAIN}/api/products`, { cache: 'no-store' })

 if (!response.ok) {
  throw new Error("Failed to fetch products");
 }

 return response.json();
}

// Get single bike product by id
export async function getSingleBikeProduct(productId: string) {
 const response = await fetch(`${DOMAIN}/api/products/${productId}`, { cache: 'no-store' })

 if (!response.ok) {
  throw new Error("Failed to fetch product");
 }

 return response.json();
}

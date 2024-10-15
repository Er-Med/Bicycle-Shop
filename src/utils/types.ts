import { StaticImageData } from "next/image";
// import { product } from '@/utils/types';

export type Product = {
 id: number;
 desc?: string;
 price: number;
 name: string;
 image: StaticImageData;
 detailsImages?: StaticImageData[];
 reviews?: number;
 stars?: number;
 brand: string;
 features?: string[];
 des?: string //! to update
}

export interface CartItem extends Product {
 quantity: number;
}



export interface UserCart {
 userId: string;
 items: CartItem[];
}


// export type products = product[]


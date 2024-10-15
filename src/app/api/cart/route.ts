import { NextRequest, NextResponse } from 'next/server';
// import { auth } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'
import { bikeProducts, clearCart, getCart, updateCart } from '@/utils/data';



// Get 
export async function GET(req: NextRequest) {
 const { userId } = auth();
 if (!userId) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
 }

 const cart = getCart(userId);
 return NextResponse.json(cart);
}

// Post 
export async function POST(req: NextRequest) {
 const { userId } = auth();
 if (!userId) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
 }

 const { productId } = await req.json();
 const cart = getCart(userId);
 const product = bikeProducts.find(p => p.id === productId);

 if (!product) {
  return NextResponse.json({ error: 'Product not found' }, { status: 404 });
 }

 const existingItem = cart.items.find(item => item.id === productId);
 if (existingItem) {
  existingItem.quantity += 1;
 } else {
  cart.items.push({ ...product, quantity: 1 });
 }

 updateCart(userId, cart.items);
 return NextResponse.json(cart);
}

// Update
export async function PATCH(req: NextRequest) {
 const { userId } = auth();
 if (!userId) {
   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
 }

 const { productId, quantity } = await req.json();
 const cart = getCart(userId);
 
 const itemIndex = cart.items.findIndex(item => item.id === productId);
 if (itemIndex !== -1) {
   if (quantity > 0) {
     cart.items[itemIndex].quantity = quantity;
   } else {
     cart.items.splice(itemIndex, 1);
   }
   updateCart(userId, cart.items);
 }

 return NextResponse.json(cart);
}

// Delete 
export async function DELETE(req: NextRequest) {
 const { userId } = auth();
 if (!userId) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
 }

 const { productId } = await req.json();
 const cart = getCart(userId);

 cart.items = cart.items.filter(item => item.id !== productId);
 updateCart(userId, cart.items);
 return NextResponse.json(cart);
}

export async function PUT(req: NextRequest) {
 const { userId } = auth();
 if (!userId) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
 }

 clearCart(userId);
 return NextResponse.json({ message: 'Cart cleared' });
}



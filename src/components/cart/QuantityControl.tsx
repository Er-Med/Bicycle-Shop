import React from 'react'

interface QuantityControlProps {
 quantity: number;
 onQuantityChange: (newQuantity: number) => void;
 minQuantity?: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
 quantity,
 onQuantityChange,
 minQuantity = 0
}) => {
 const handleDecrease = () => {
  if (quantity > minQuantity) {
   onQuantityChange(quantity - 1);
  }
 };

 const handleIncrease = () => {
  onQuantityChange(quantity + 1);
 };

 return (
  <div className="flex items-center">
   <button
    className='border rounded-md py-2 px-4 mr-2'
    onClick={handleDecrease}
    disabled={quantity <= minQuantity}
   >
    -
   </button>
   <span className="text-center w-8">{quantity}</span>
   <button
    className='border rounded-md py-2 px-4 ml-2'
    onClick={handleIncrease}
   >
    +
   </button>
  </div>
 );
};

export default QuantityControl;
// export default function QuantityControl({ item }: { item: CartItem }) {
//  const { updateQuantity } = useCart();

//  const handleQuantityChange = (productId: number, newQuantity: number) => {
//   if (newQuantity >= 0 && newQuantity <= 3) {
//    updateQuantity(productId, newQuantity);
//   }
//  };
//  return (
//   <div className="flex items-center">
//    <button className='border rounded-md py-2 px-4 mr-2' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
//    <span className="text-center w-8">{item.quantity}</span>
//    <button className='border rounded-md py-2 px-4 mr-2' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//   </div>
//  );
// }
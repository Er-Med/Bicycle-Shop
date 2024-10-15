"use client";
import { useState } from "react";

export default function NumberInput() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    // Ensure the value is within the min/max range
    if (value >= 1 && value <= 3) {
      setQuantity(value);
    }
  };

  return (
    <input
      type='number'
      id='quantity'
      name='quantity'
      min='1'
      max='3'
      value={quantity}
      onChange={handleChange}
      className='w-12 text-center rounded-sm border  border-orange-300 shadow-sm  outline-none'
    />
  );
}

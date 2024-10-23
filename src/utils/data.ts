

// image 1
import img_3 from "../../Public/images/bike-11/img_3.png";
// image 2
import img_2 from "../../Public/images/bike-10/img_2.png";
// image 3
import img_4 from "../../Public/images/bike-12/img_4.png";
// image 4


import bike_1 from "../../Public/images/bike-1/bike.jpg";
import bike_1_01 from "../../Public/images/bike-1/bike-1_01.jpg"
import bike_1_02 from "../../Public/images/bike-1/bike-1_02.jpg"
import bike_1_03 from "../../Public/images/bike-1/bike-1_03.jpg"
import bike_1_04 from "../../Public/images/bike-1/bike-1_04.jpg"
import bike_1_05 from "../../Public/images/bike-1/bike-1_05.jpg"
import bike_1_06 from "../../Public/images/bike-1/bike-1_06.jpg"

// 
import bike_2 from "../../Public/images/bike-2/bike.jpg";
import bike_2_02 from "../../Public/images/bike-2/bike-2_02.jpg";
import bike_2_03 from "../../Public/images/bike-2/bike-2_03.jpg";
import bike_2_04 from "../../Public/images/bike-2/bike-2_04.jpg";
import bike_2_05 from "../../Public/images/bike-2/bike-2_05.jpg";
import bike_2_06 from "../../Public/images/bike-2/bike-2_06.jpg";

// image 6
import bike_3 from "../../Public/images/bike-3/bike.jpg";
import bike_3_02 from "../../Public/images/bike-3/bike-3_02.jpg";
import bike_3_03 from "../../Public/images/bike-3/bike-3_03.jpg";
import bike_3_04 from "../../Public/images/bike-3/bike-3_04.jpg";
import bike_3_05 from "../../Public/images/bike-3/bike-3_05.jpg";
import bike_3_06 from "../../Public/images/bike-3/bike-3_06.jpg";
// image 7
import bike_4 from "../../Public/images/bike-4/bike.jpg";
import bike_4_02 from "../../Public/images/bike-4/bike-4_02.jpg";
import bike_4_03 from "../../Public/images/bike-4/bike-4_03.jpg";
import bike_4_04 from "../../Public/images/bike-4/bike-4_04.jpg";
import bike_4_05 from "../../Public/images/bike-4/bike-4_05.jpg";
import bike_4_06 from "../../Public/images/bike-4/bike-4_06.jpg";
// image 8
import bike_5 from "../../Public/images/bike-5/bike.jpg";
import bike_5_02 from "../../Public/images/bike-5/bike-5_02.jpg";
import bike_5_03 from "../../Public/images/bike-5/bike-5_03.jpg";
import bike_5_04 from "../../Public/images/bike-5/bike-5_04.jpg";

// image 9
import bike_6 from "../../Public/images/bike-6/bike.jpg";
import bike_6_02 from "../../Public/images/bike-6/bike-6_02.jpg";
import bike_6_03 from "../../Public/images/bike-6/bike-6_03.jpg";
import bike_6_04 from "../../Public/images/bike-6/bike-6_04.jpg";
import bike_6_05 from "../../Public/images/bike-6/bike-6_05.jpg";
import bike_6_06 from "../../Public/images/bike-6/bike-6_06.jpg";
// image 10
import bike_7 from "../../Public/images/bike-7/bike.jpg";
import bike_7_02 from "../../Public/images/bike-7/bike-7_02.jpg";
import bike_7_03 from "../../Public/images/bike-7/bike-7_03.jpg";
import bike_7_04 from "../../Public/images/bike-7/bike-7_04.jpg";
import bike_7_05 from "../../Public/images/bike-7/bike-7_05.jpg";
import bike_7_06 from "../../Public/images/bike-7/bike-7_06.jpg";
// image 11
import bike_8 from "../../Public/images/bike-8/bike.jpg";
import bike_8_02 from "../../Public/images/bike-8/bike-8_02.jpg";
import bike_8_03 from "../../Public/images/bike-8/bike-8_03.jpg";
import bike_8_04 from "../../Public/images/bike-8/bike-8_04.jpg";
import bike_8_05 from "../../Public/images/bike-8/bike-8_05.jpg";
import bike_8_06 from "../../Public/images/bike-8/bike-8_06.jpg";
// image 12
import bike_9 from "../../Public/images/bike-9/bike.jpg";
import bike_9_02 from "../../Public/images/bike-9/bike-9_02.jpg";
import bike_9_03 from "../../Public/images/bike-9/bike-9_03.jpg";
import bike_9_04 from "../../Public/images/bike-9/bike-9_04.jpg";
import { CartItem, Product, UserCart } from "./types";





const bikeProducts: Product[] = [
 {
  id: 1,
  image: img_2,
  reviews: 190,
  stars: 5,
  detailsImages: [img_2, img_2, img_2, img_2],
  brand: "Cyclone",
  features: [
   "Lightweight aluminum frame",
   "Aerodynamic design",
   "High-performance disc brakes",
   "Smooth gear shifting",
   "Anti-skid tires"
  ],
  name: "RoadMaster X1",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 1325,
 },
 {
  id: 2,
  image: img_3,
  reviews: 120,
  stars: 4,
  detailsImages: [img_3, img_3, img_3, img_3],
  brand: "VeloCraft",
  features: [
   "Carbon fiber body",
   "Ultra-responsive suspension",
   "Shimano gear system",
   "Ergonomic saddle",
   "Puncture-resistant tires"
  ],
  name: "TrailBlazer 500",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 2025,
 },
 {
  id: 3,
  image: img_4,
  reviews: 120,
  stars: 4,
  detailsImages: [img_4, img_4, img_4, img_4],
  brand: "Nimbus Bikes",
  features: [
   "Electric motor option",
   "Long battery life",
   "Weatherproof design",
   "LED display panel",
   "Hydraulic brakes"
  ],
  name: "GravelGrip 700",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 1235.79,
 },

 {
  id: 4,
  image: bike_1,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_1_01, bike_1_02, bike_1_03, bike_1_04, bike_1_05, bike_1_06],
  brand: "Pulse Wheels",
  features: [
   "Sleek urban design",
   "Reflective sidewall tires",
   "Quick-release wheels",
   "Lightweight alloy frame",
   "Multi-terrain tires"
  ],
  name: "AdventureMax",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 1085,
  // detailImages: []
 },
 {
  id: 5,
  image: bike_2,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_2_02, bike_2_03, bike_2_04, bike_2_05, bike_2_06],
  brand: "TorqueRide",
  features: [
   "Rugged mountain build",
   "Shock-absorbing fork",
   "Oversized all-terrain tires",
   "21-speed transmission",
   "High-grip handlebars"
  ],
  name: "UrbanRush",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 1733,
 },
 {
  id: 6,
  image: bike_3,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_3_02, bike_3_03, bike_3_04, bike_3_05, bike_3_06],
  brand: "AeroSwift",
  features: [
   "Aero-optimized frame",
   "Carbon fiber fork",
   "Lightweight racing tires",
   "Precision shifting",
   "Adjustable seat height"
  ],
  name: "CruiseControl ZX",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 1800,
 },
 {
  id: 7,
  image: bike_4,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_4_02, bike_4_03, bike_4_04, bike_4_05, bike_4_06],
  brand: "Zenith Cycles",
  features: [
   "Fat tire option",
   "Full suspension system",
   "Tubeless tires",
   "Dual disc brakes",
   "Rear carrier rack"
  ],
  name: "EnduroRider",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 1600,
 },
 {
  id: 8,
  image: bike_5,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_5_02, bike_5_03, bike_5_04],
  brand: "RevoX",
  features: [
   "Built-in bike computer",
   "Foldable frame",
   "LED front and rear lights",
   "Chain protection cover",
   "USB charging port"
  ],
  name: "Turbo Trekker",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 2221,
 },
 {
  id: 9,
  image: bike_6,
  reviews: 360,
  stars: 5,
  detailsImages: [bike_6_02, bike_6_03, bike_6_04, bike_6_05, bike_6_06],
  brand: "Titanium Gear",
  features: [
   "Titanium alloy frame",
   "Ultra-lightweight",
   "Superior strength and durability",
   "Precision hydraulic brakes",
   "Lifetime warranty on frame"
  ],
  name: "Radon Solution Hybrid 7.0 Performance 500",
  desc: "The Bosch Performance Line drive unit with its 250 watts of maximum power and a whopping 65Nm of torque is the core of the trekking classic. Shimano´s 10-speed DEORE group paired with the cassette,",
  price: 1789,
 },
 {
  id: 10,
  image: bike_7,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_7_02, bike_7_03, bike_7_04, bike_7_05, bike_7_06],
  brand: "Fusion Bikes",
  features: [
   "Streamlined commuting design",
   "Rear cargo mounts",
   "Internal cable routing",
   "Anti-theft wheel locks",
   "Water-resistant frame"
  ],
  name: "AeroGlide 2000",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 532,
 },
 {
  id: 11,
  image: bike_8,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_8_02, bike_8_03, bike_8_04, bike_8_05, bike_8_06],
  brand: "GlideMotion",
  features: [
   "Comfort-focused design",
   "Cushioned saddle with springs",
   "Smooth pedal assist (electric)",
   "Integrated bell and lights",
   "Step-through frame"
  ],
  name: "Velocity Viper",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 922,
 },
 {
  id: 12,
  image: bike_9,
  reviews: 120,
  stars: 4,
  detailsImages: [bike_9_02, bike_9_03, bike_9_04],
  brand: "PowerPedal",
  features: [
   "Performance hybrid design",
   "Mid-drive electric motor",
   "Regenerative braking system",
   "Auto-shifting gears",
   "Built-in fitness tracking system"
  ],
  name: "MountainKing Pro",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 252,
 },
];

const home_products = [
 {
  id: 1,
  image: img_2,
  name: "Bike 1",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 4052,
  reviews: 120,
  stars: 4,
  detailsImages: [img_2, img_2, img_2, img_2]
 },
 {
  id: 2,
  image: img_3,
  name: "BigOne",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 3012,
  reviews: 120,
  stars: 4,
  detailsImages: [img_3, img_3, img_3, img_3]

 },
 {
  id: 3,
  image: img_4,
  name: "BigOne",
  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  price: 800,
  reviews: 120,
  stars: 4,
  detailsImages: [img_3, img_3, img_3, img_3]
 },
];


//cart data
export const carts: UserCart[] = [];

// Get Cart Function
export const getCart = (userId: string): UserCart => {
 const existingCart = carts.find(cart => cart.userId === userId);
 if (existingCart) {
  return existingCart;
 }
 const newCart: UserCart = { userId, items: [] };
 carts.push(newCart);
 return newCart;
};

// Update Cart Function
export const updateCart = (userId: string, newItems: CartItem[]): void => {
 const cartIndex = carts.findIndex(cart => cart.userId === userId);
 if (cartIndex !== -1) {
  carts[cartIndex].items = newItems;
 } else {
  carts.push({ userId, items: newItems });
 }
};

// Delete Cart function
export const clearCart = (userId: string): void => {
 const cartIndex = carts.findIndex(cart => cart.userId === userId);
 if (cartIndex !== -1) {
  carts[cartIndex].items = [];
 }
};

export {
 home_products,
 bikeProducts
}
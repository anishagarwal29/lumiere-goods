import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Lumina Smart Lamp',
    price: 89.99,
    category: 'Home',
    image: 'https://picsum.photos/id/11/800/800',
    description: 'Transform your living space with the Lumina Smart Lamp. Featuring adaptive ambient lighting that syncs with your circadian rhythm, this minimalist masterpiece is crafted from aerospace-grade aluminum.',
    features: ['App Control', '16M Colors', 'Voice Assistant Compatible', 'Energy Efficient'],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'p2',
    name: 'AeroWireless Pro',
    price: 149.50,
    category: 'Tech',
    image: 'https://picsum.photos/id/1/800/800',
    description: 'Experience pure sound with AeroWireless Pro. Industry-leading active noise cancellation meets hi-fidelity audio drivers in a lightweight, ergonomic design that lasts up to 30 hours on a single charge.',
    features: ['Active Noise Cancellation', '30hr Battery', 'Spatial Audio', 'Water Resistant'],
    rating: 4.9,
    reviews: 856
  },
  {
    id: 'p3',
    name: 'Nova Weekender Bag',
    price: 120.00,
    category: 'Fashion',
    image: 'https://picsum.photos/id/20/800/800',
    description: 'The ultimate travel companion. Constructed from waterproof ballistic nylon with genuine leather accents, the Nova Weekender fits everything you need for a 3-day getaway while keeping you stylish.',
    features: ['Waterproof', 'Laptop Compartment', 'Shoe Pocket', 'Lifetime Warranty'],
    rating: 4.7,
    reviews: 42
  },
  {
    id: 'p4',
    name: 'Zenith Mechanical Watch',
    price: 299.00,
    category: 'Fashion',
    image: 'https://picsum.photos/id/175/800/800',
    description: 'A tribute to classic horology. The Zenith features an automatic movement visible through the exhibition case back, sapphire crystal glass, and a genuine Italian leather strap.',
    features: ['Automatic Movement', 'Sapphire Crystal', '5ATM Water Resistance', 'Luminous Hands'],
    rating: 5.0,
    reviews: 19
  },
  {
    id: 'p5',
    name: 'BrewMaster Pour-Over',
    price: 45.00,
    category: 'Home',
    image: 'https://picsum.photos/id/1060/800/800',
    description: 'Elevate your morning ritual. The BrewMaster creates the perfect bloom for your coffee grounds, ensuring a rich, complex flavor profile every time. Made from heat-resistant borosilicate glass.',
    features: ['Borosilicate Glass', 'Double-mesh Filter', 'Ergonomic Handle', 'Dishwasher Safe'],
    rating: 4.6,
    reviews: 210
  },
  {
    id: 'p6',
    name: 'Titanium EDC Pen',
    price: 35.00,
    category: 'Tech',
    image: 'https://picsum.photos/id/366/800/800',
    description: 'Minimalist design, maximum durability. Machined from a solid block of titanium, this pen is balanced for writing comfort and built to last a lifetime. Accepts standard G2 refills.',
    features: ['Solid Titanium', 'Bolt Action', 'Lightweight', 'Gift Box Included'],
    rating: 4.5,
    reviews: 67
  }
];

export const TESTIMONIALS = [
  { name: "Sarah J.", text: "Shipping was incredibly fast, and the Lumina Lamp changed my room completely.", role: "Verified Buyer" },
  { name: "Mike T.", text: "Best customer service I've experienced. The AI chat helped me pick the right size.", role: "Verified Buyer" },
  { name: "Elena R.", text: "Quality is unmatched for the price. I'm obsessed with the weekender bag.", role: "Verified Buyer" }
];
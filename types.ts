export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ViewState = 'home' | 'product-details';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
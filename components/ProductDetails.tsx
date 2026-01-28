import React, { useState } from 'react';
import { Product } from '../types';
import { Star, Truck, ShieldCheck, ArrowLeft, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import AIChat from './AIChat';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square w-full bg-gray-100 rounded-3xl overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <button className="p-2 bg-white/80 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Mock thumbnails */}
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-gray-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-900 transition-all">
                  <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-70 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">{product.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{product.name}</h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-slate-500 text-sm font-medium">{product.reviews} Verified Reviews</span>
            </div>

            <div className="text-3xl font-bold text-slate-900 mb-8">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Key Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
              <div className="flex items-center text-slate-700 text-sm">
                <Truck className="w-5 h-5 mr-3 text-slate-400" />
                <span>Free shipping on all worldwide orders over $50</span>
              </div>
              <div className="flex items-center text-slate-700 text-sm">
                <ShieldCheck className="w-5 h-5 mr-3 text-slate-400" />
                <span>2-Year Warranty & 30-Day Money Back Guarantee</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-3 sm:w-1/3 justify-between">
                <button onClick={handleDecrement} className="p-1 hover:text-blue-600 transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="font-bold text-slate-900">{quantity}</span>
                <button onClick={handleIncrement} className="p-1 hover:text-blue-600 transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
              <button
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 bg-slate-900 text-white rounded-full py-4 px-8 font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* AI Help Trigger */}
            {/* <div className="mt-6">
              <button
                onClick={() => setIsChatOpen(true)}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-colors border border-blue-100"
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Have questions? Ask our AI Specialist</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <AIChat product={product} isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} /> */}
    </div>
  );
};

export default ProductDetails;
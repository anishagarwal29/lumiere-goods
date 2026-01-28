import React from 'react';
import { Product } from '../types';
import { Star, Plus } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick, onAddToCart }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white" id="shop">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending Now</h2>
          <p className="text-slate-500">Handpicked items just for you.</p>
        </div>
        <button className="hidden sm:block text-slate-900 font-medium hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative cursor-pointer" onClick={() => onProductClick(product)}>
            {/* Image Container */}
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              {/* Quick Add Button - appears on hover */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-900 hover:text-white"
                aria-label="Add to cart"
              >
                <Plus className="w-5 h-5" />
              </button>
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-black/5 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold uppercase text-slate-900">
                {product.category}
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center mt-1 space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-slate-500">{product.rating} ({product.reviews})</span>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
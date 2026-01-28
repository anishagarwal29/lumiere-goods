import React from 'react';
import { CartItem } from '../types';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in-right">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Your Cart
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-900">Your cart is empty</p>
                  <p className="text-slate-500 text-sm mt-1">Looks like you haven't added anything yet.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex py-4 animate-fade-in">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-slate-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                           <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-2 hover:bg-gray-50 rounded-l-lg text-slate-600"><Minus className="w-4 h-4" /></button>
                           <span className="px-3 font-medium text-slate-900">{item.quantity}</span>
                           <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-2 hover:bg-gray-50 rounded-r-lg text-slate-600"><Plus className="w-4 h-4" /></button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="font-medium text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-6 bg-slate-50">
              <div className="flex justify-between text-base font-medium text-slate-900 mb-4">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-slate-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                className="w-full flex items-center justify-center rounded-full border border-transparent bg-slate-900 px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-slate-800 transition-all hover:shadow-lg active:scale-[0.98]"
              >
                Checkout
              </button>
              <div className="mt-6 flex justify-center text-center text-sm text-slate-500">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="font-medium text-blue-600 hover:text-blue-500"
                    onClick={onClose}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AnnouncementBar from './components/AnnouncementBar';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS, TESTIMONIALS } from './constants';
import { Product, CartItem, ViewState } from './types';
import { CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('lumiere-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('lumiere-cart', JSON.stringify(cart));
  }, [cart]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('product-details');
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });

    // Show notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleHomeClick = () => {
    setView('home');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={handleHomeClick}
      />

      <main>
        {view === 'home' && (
          <>
            <Hero onShopNow={() => {
              document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <AnnouncementBar />
            <ProductList
              products={PRODUCTS}
              onProductClick={handleProductClick}
              onAddToCart={(p) => handleAddToCart(p, 1)}
            />

            {/* Social Proof / Features Section */}
            <section className="bg-slate-900 py-24 text-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Why Choose Lumiere?</h2>
                  <p className="text-slate-400">Join over 10,000 happy customers worldwide.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                      <div className="flex text-yellow-500 mb-4">
                        {[...Array(5)].map((_, j) => <CheckCircle key={j} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-lg italic text-slate-300 mb-6">"{t.text}"</p>
                      <div>
                        <p className="font-bold">{t.name}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'product-details' && selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onBack={handleHomeClick}
            onAddToCart={handleAddToCart}
          />
        )}

        {view === 'privacy-policy' && (
          <PrivacyPolicy onBack={handleHomeClick} />
        )}

        {view === 'terms-of-service' && (
          <TermsOfService onBack={handleHomeClick} />
        )}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemove={handleRemoveFromCart}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; 2024 Lumiere Goods. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => { setView('privacy-policy'); window.scrollTo(0, 0); }} className="hover:text-black">Privacy Policy</button>
            <button onClick={() => { setView('terms-of-service'); window.scrollTo(0, 0); }} className="hover:text-black">Terms of Service</button>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3 transition-all duration-300 z-[70] ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <CheckCircle className="w-5 h-5 text-green-400" />
        <span className="font-medium">Added to cart successfully</span>
      </div>
    </div>
  );
};

export default App;
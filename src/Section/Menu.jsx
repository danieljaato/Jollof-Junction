import React, { useState } from 'react';
import { ShoppingCart, Search, Plus, Minus, X, Trash2, ArrowLeft, CheckCircle2 } from 'lucide-react';

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Smoky Jollof Rice',
    price: 2000,
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600'
  },
  {
    id: 2,
    name: 'Fried Plantain (Dodo)',
    price: 800,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600'
  },
  {
    id: 3,
    name: 'Roasted Chicken',
    price: 4500,
    category: 'Protein',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600'
  },
  {
    id: 4,
    name: 'Pounded Yam',
    price: 800,
    category: 'Swallow',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'
  },
  {
    id: 5,
    name: 'Egusi Soup',
    price: 1500,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'
  },
  {
    id: 6,
    name: 'Suya Spaghetti',
    price: 3500,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600'
  },
  {
    id: 7,
    name: 'Moi Moi',
    price: 1000,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'
  },
  {
    id: 8,
    name: 'Supreme Ice Cream 500ML',
    price: 2800,
    category: 'Drinks & Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600'
  },
];

const CATEGORIES = ['All', 'Rice', 'Sides', 'Protein', 'Swallow', 'Soups', 'Pasta', 'Drinks & Desserts'];

export default function FoodOrderingApp() {
  const [products] = useState(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Checkout states
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'Lagos',
    phone: ''
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 1500;
  const total = subtotal + (cart.length > 0 ? deliveryFee : 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city) {
      alert('Please fill out all required fields.');
      return;
    }
    setOrderPlaced(true);
  };

  

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero / Banner */}
      <section className="bg-[#a43700] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Order Your Favorite Nigerian Meals</h1>
        <p className="max-w-xl mx-auto text-base sm:text-lg opacity-90">Hot, fresh, and home-style dishes delivered straight to your door.</p>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* If order is completed successfully */}
        {orderPlaced ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 my-12">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Thank you, {formData.firstName}! Your delicious meal is being prepared and will be delivered shortly.</p>
            <button
              onClick={() => {
                setOrderPlaced(false);
                setIsCheckingOut(false);
                setCart([]);
                setIsCartOpen(false);
              }}
              className="w-full bg-[#a43700] text-white py-3 rounded-xl font-bold hover:bg-[#8a2c00] transition"
            >
              Back to Menu
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Form View */
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setIsCheckingOut(false)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-semibold transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Cart
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Form fields */}
              <form onSubmit={handleCompleteOrder} className="md:col-span-2 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Checkout Details</h2>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a43700]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a43700]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a43700]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="10 Adeola Odeku Street"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a43700]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Victoria Island"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a43700]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#a43700]"
                    >
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Ogun">Ogun</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="08012345678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a43700]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#a43700] hover:bg-[#8a2c00] text-white py-4 rounded-xl font-bold text-base transition shadow-sm"
                >
                  Pay ₦{total.toLocaleString()}.00 (Paystack Secured)
                </button>
              </form>

              {/* Order Summary Column */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name} x {item.quantity}</span>
                      <span className="font-semibold text-gray-900">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Menu & Catalog View */
          <>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3.5 top-3.5 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search meals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a43700] shadow-sm transition"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                      selectedCategory === category
                        ? 'bg-[#a43700] text-white shadow-sm'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#a43700] uppercase tracking-wider">{product.category}</span>
                      <h3 className="font-bold text-gray-800 text-lg mt-1 mb-2">{product.name}</h3>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-extrabold text-gray-900">₦{product.price.toLocaleString()}.00</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-[#a43700] hover:bg-[#8a2c00] text-white text-sm font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm"
                      >
                        <Plus className="w-4 h-4" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Cart Drawer */}
      {isCartOpen && !isCheckingOut && !orderPlaced && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-[#a43700]" /> Your Cart
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <ShoppingCart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-800 font-bold text-lg mb-1">Your Cart is Empty!</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex-1 pr-4">
                        <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                        <span className="text-xs text-[#a43700] font-bold">₦{item.price.toLocaleString()}.00</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-200 bg-white rounded-lg overflow-hidden">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:bg-gray-100 text-gray-600">
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:bg-gray-100 text-gray-600">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between text-base font-semibold text-gray-900 mb-4">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}.00</span>
                  </div>
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full bg-[#a43700] hover:bg-[#8a2c00] text-white py-3.5 rounded-xl font-bold transition shadow-sm"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
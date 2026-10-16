import React from 'react';
import fu from '../assets/fu.png';
import { useCart } from '../context/CartContext';
import { 
  UtensilsCrossed, 
  CreditCard, 
  CheckCircle2, 
  Star,
  Flame, 
  Leaf, 
  Bike, 
  ShieldCheck,
  Plus,
  Lock
} from 'lucide-react';

// Static Data Constants
const DETAILED_FEATURES = [
  {
    icon: Flame,
    title: 'Hearth Wood-Smoked',
    description: 'Authentic Nigerian firewood aroma sealed in heavy Cast Iron Dutch ovens.',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Leaf,
    title: '100% Fresh Produce',
    description: 'Farm-direct plum tomatoes, habaneros, and organic herbs picked at dawn.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-700',
  },
  {
    icon: Bike,
    title: '30-Min Rapid Drop',
    description: 'Dedicated fleet covering Ikoyi, VI, Lekki Phase 1, and Oniru at piping temperatures.',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-700',
  },
  {
    icon: ShieldCheck,
    title: 'Paystack Escrow',
    description: 'One-click cards, USSD, and instant transfers with verified bank-grade encryption.',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-800',
  },
];

const AVATARS = [
  { label: 'KO', bg: 'bg-pink-200 text-pink-900' },
  { label: 'TA', bg: 'bg-orange-200 text-orange-900' },
  { label: 'DE', bg: 'bg-sky-200 text-sky-900' },
  { label: '+2k', bg: 'bg-green-700 text-white' },
];

const PERK_FEATURES = [
  'Instant settlement',
  'Contactless delivery',
  'Warmth insulated bag',
];

const DISHES = [
  {
    id: 1,
    badge: '#1 Bestseller',
    badgeBg: 'bg-amber-100 text-amber-900',
    tag: 'Mild / Spicy • Slow braised 4 hrs',
    title: 'Royal Firewood Jollof & Suya Spiced Chicken',
    description: 'Simmered over hardwood logs with rich red pepper puree, caramelized onions, sweet golden dodo (plantain), and herb-seared chicken drumstick.',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    badge: 'Chef Curated',
    badgeBg: 'bg-slate-900 text-white',
    rating: '4.95',
    reviews: 410,
    title: 'The Lekki Gold Hearth Burger',
    description: 'Double dry-aged smash patties, smoked Gouda cheese, crispy spiced bacon, and house-made truffle sauce.',
    price: 5400,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    badge: 'Crowd Magnet',
    badgeBg: 'bg-red-100 text-red-900',
    rating: '4.88',
    reviews: 620,
    title: 'Fire-Roasted Suya Jumbo Wings',
    description: 'Basted in raw acacia honey, roasted kuli-kuli dry rub, lime zest, and crisp purple shallots.',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    badge: 'Catch of the Day',
    badgeBg: 'bg-emerald-100 text-emerald-900',
    rating: '4.92',
    reviews: 510,
    title: 'Wood-Charred Coastal Tilapia',
    description: 'Fresh lagoon catch marinated in scent leaves, ginger, scotch bonnet relish, and flame-blistered plantain.',
    price: 6900,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    badge: 'Perfect Side',
    badgeBg: 'bg-amber-100 text-amber-900',
    rating: '4.90',
    reviews: 780,
    title: 'Cracked Sea Salt Fries & Double Dips',
    description: 'Hand-cut Russet potatoes double-fried in peanut oil, accompanied by house-blended habanero crema sauce.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
  }
];

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    text: '"That smoky aroma in their jollof is the real deal. You normally only get this taste at lavish outdoor Yoruba weddings with big iron pots. Arrived piping hot in 25 mins flat!"',
    initials: 'TO',
    name: 'Tunde Oladipo',
    location: 'Admiralty Way, Lekki Phase 1',
    avatarBg: 'bg-orange-700'
  },
  {
    id: 2,
    rating: 5,
    text: '"Ordering via Paystack is effortlessly seamless. No delivery rider calling 10 times asking for account transfer receipts. The burger and honey suya wings are unmatched in VI."',
    initials: 'FA',
    name: 'Fatima Al-Hassan',
    location: 'Adeola Odeku, Victoria Island',
    avatarBg: 'bg-amber-700'
  },
  {
    id: 3,
    rating: 5,
    text: '"We ordered for a 12-person boardroom lunch in Ikoyi. Every meal came individually insulated, fresh, and labeled clearly. Fuzzy Meals is now on speed dial for our office team."',
    initials: 'CA',
    name: 'Chuka Anozie',
    location: 'Bourdillon Road, Ikoyi',
    avatarBg: 'bg-emerald-800'
  }
];

const StatCard = ({ icon: Icon, number = "40+ Years", text = "of Nigerian cooking excellence" }) => (
  <article className="w-full sm:w-72 lg:w-80 rounded-2xl bg-[#FDF5F5] p-6 text-center shadow-xs flex flex-col items-center justify-center border border-rose-100">
    <span className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-xs">
      {Icon ? (
        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[#5C0612]" aria-hidden="true" />
      ) : (
        <svg className="h-7 w-7 sm:h-8 sm:w-8 text-[#5C0612]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 00-9 9v1a9 9 0 0018 0v-1a9 9 0 00-9-9zm0 2a7 7 0 017 7v1H5v-1a7 7 0 017-7z" />
        </svg>
      )}
    </span>
    <h2 className="text-xl sm:text-2xl font-bold text-[#5C0612]">{number}</h2>
    <p className="mt-1 text-xs sm:text-sm text-slate-700 font-medium">{text}</p>
  </article>
);

const Hero = () => {
  const { cart, addToCart, cartTotal, handleCheckout } = useCart();

  const deliveryFee = 800;
  const discount = 1200;
  const subtotal = cartTotal || 0;
  const total = subtotal > 0 ? subtotal + deliveryFee - discount : 0;

  return (
    <main className="w-full min-h-screen bg-[#20b2a6]/10 px-4 py-6 sm:px-8 sm:py-10 md:px-12 md:py-12 flex flex-col gap-8 md:gap-12 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 md:gap-12">
        
        {/* Badges / Pill Tags */}
        <aside className="animate-fade-in flex flex-row">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-teal-900/10 border border-teal-900/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-teal-900">
              🔥 #1 Rated Jollof & Grill Spot in Lekki
            </span>
          </span>
        </aside>

        {/* Main Two-Column Hero Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <header className="flex flex-col gap-5 sm:gap-6 text-slate-900 font-sans">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight sm:leading-none text-black">
                Fresh, Fiery &{' '}
                <span className="text-[#a43700]">Heartfelt</span> <br className="hidden sm:inline" />
                Meals Delivered Hot.
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed font-normal">
              Savor authentic, firewood-smoked Nigerian delicacies made with fresh, farm-direct ingredients and delivered piping hot straight to your doorstep.
            </p>

            {/* Top Rating Section */}
            <section className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex -space-x-2 overflow-hidden" aria-label="Customer review avatars">
                {AVATARS.map((avatar, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs font-bold border-2 border-white shadow-xs ${avatar.bg}`}
                  >
                    {avatar.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="flex text-amber-500" aria-label="4.9 out of 5 stars rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 stroke-amber-500" aria-hidden="true" />
                    ))}
                  </span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-700 font-medium">
                  Over 2,400+ satisfied foodies in Lekki & VI
                </p>
              </div>
            </section>

            {/* Action Buttons */}
            <nav className="flex items-center gap-3 flex-col sm:flex-row w-full sm:w-auto">
              <button className="w-full sm:w-auto justify-center flex items-center gap-2 bg-[#8B263E] hover:bg-[#721f32] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B263E] active:scale-95 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer">
                <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
                <span>Explore Full Menu</span>
              </button>

              <button className="w-full sm:w-auto justify-center flex items-center gap-2 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 active:scale-95 text-slate-800 font-semibold px-6 py-3 rounded-full text-sm transition-all border border-slate-300 cursor-pointer shadow-2xs">
                <CreditCard className="w-4 h-4 text-slate-700" aria-hidden="true" />
                <span>Order via Paystack</span>
              </button>
            </nav>

            {/* Bottom Feature Perks */}
            <aside className="flex items-center gap-4 sm:gap-6 text-xs text-slate-700 font-semibold flex-wrap pt-2">
              {PERK_FEATURES.map((feature, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </span>
              ))}
            </aside>
          </header>

          {/* RIGHT COLUMN */}
          <figure className="flex justify-center lg:justify-end w-full m-0">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <span className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-full h-full border-2 border-[#e6bd55] rounded-xl pointer-events-none" aria-hidden="true" />
              <img
                src={fu}
                alt="Freshly prepared Nigerian hearth-cooked meal served in a bowl"
                className="relative z-10 w-full h-[260px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover rounded-xl shadow-xl"
              />
            </div>
          </figure>
        </section>

        {/* FEATURE CARDS BOTTOM GRID */}
        <section aria-label="Core features" className="w-full bg-[#e8f4f6] p-4 sm:p-6 md:p-8 rounded-2xl border border-teal-900/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DETAILED_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-2xs border border-slate-200"
                >
                  <span className={`flex-shrink-0 p-2.5 rounded-lg ${feature.bgColor} ${feature.iconColor}`} aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-700 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* MENU SECTION */}
        <section aria-labelledby="menu-section-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold text-[#b32b00] uppercase tracking-wider block mb-1">Chef's Kitchen Showcase</span>
              <h2 id="menu-section-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Handcrafted Comfort Classics</h2>
              <p className="text-slate-700 text-xs sm:text-sm mt-1 font-normal">From our slow-roasted hearth jollof to artisanal dry-aged smash stacks, discover why Lagos orders from Fuzzy Meals every single day.</p>
            </div>

            <nav aria-label="Menu categories" className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <button className="bg-[#b32b00] text-white px-3.5 py-2 rounded-full font-bold shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b32b00]">All Highlights</button>
              <button className="bg-slate-200 text-slate-800 hover:bg-slate-300 px-3.5 py-2 rounded-full font-semibold shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">Smoky Hearth</button>
              <button className="bg-slate-200 text-slate-800 hover:bg-slate-300 px-3.5 py-2 rounded-full font-semibold shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">Flame Grill</button>
              <button className="bg-slate-200 text-slate-800 hover:bg-slate-300 px-3.5 py-2 rounded-full font-semibold shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">Sides & Bites</button>
            </nav>
          </header>

          {/* FOOD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="md:col-span-2 bg-white rounded-2xl border border-slate-300 overflow-hidden shadow-xs flex flex-col sm:flex-row">
              <div className="sm:w-1/2 relative min-h-[220px]">
                <img src={DISHES[0].image} alt={DISHES[0].title} className="w-full h-full object-cover" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${DISHES[0].badgeBg}`}>
                  {DISHES[0].badge}
                </span>
              </div>
              <div className="sm:w-1/2 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded font-bold">{DISHES[0].tag}</span>
                  <h3 className="font-black text-slate-900 text-lg mt-2 leading-snug">{DISHES[0].title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-normal">{DISHES[0].description}</p>
                </div>
                <footer className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <label htmlFor="portion-info-1" className="text-xs text-slate-600 block uppercase font-bold">Serving Portion</label>
                    <span id="portion-info-1" className="text-lg font-black text-slate-900">₦{DISHES[0].price.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => addToCart && addToCart(DISHES[0])}
                    aria-label={`Add ${DISHES[0].title} to cart`}
                    className="bg-[#b32b00] hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b32b00] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" /> Quick Add
                  </button>
                </footer>
              </div>
            </article>

            {DISHES.slice(1).map((dish) => (
              <article key={dish.id} className="bg-white rounded-2xl border border-slate-300 overflow-hidden shadow-xs flex flex-col justify-between p-4">
                <div>
                  <div className="relative rounded-xl overflow-hidden mb-3 h-40">
                    <img src={dish.image} alt={dish.title} className="w-full h-full object-cover" />
                    <span className={`absolute top-2 right-2 text-xs font-bold px-2.5 py-1 rounded-full ${dish.badgeBg}`}>
                      {dish.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs mb-1 font-bold" aria-label={`${dish.rating} out of 5 stars`}>
                    <span aria-hidden="true">★</span>
                    <span className="text-slate-900">{dish.rating}</span>
                    <span className="text-slate-600 font-normal">({dish.reviews} reviews)</span>
                  </div>
                  <h3 className="font-black text-slate-900 text-sm leading-snug">{dish.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 line-clamp-2 leading-relaxed font-normal">{dish.description}</p>
                </div>
                <footer className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200">
                  <span className="font-black text-slate-900 text-base">₦{dish.price.toLocaleString()}</span>
                  <button 
                    onClick={() => addToCart && addToCart(dish)}
                    aria-label={`Add ${dish.title} to cart`}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-[#b32b00] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b32b00] flex items-center justify-center transition-colors font-bold text-slate-800 cursor-pointer active:scale-95 shadow-2xs"
                  >
                    +
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </section>

        {/* QUICK CART / CHECKOUT SECTION */}
        <section aria-labelledby="checkout-section-heading" className="bg-slate-200/60 border-y border-slate-300 py-12 my-8 rounded-2xl px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <header className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full inline-block">
                ⚡ Paystack Integrated Checkout
              </span>
              <h2 id="checkout-section-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Seamless Ordering. Zero Waiting.
              </h2>
              <p className="text-slate-700 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
                Skip the endless phone calls. Pick your spice level, customize sides, and finalize in 10 seconds via Nigeria’s most trusted payment gateway.
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-md pt-2" aria-label="Delivery performance metrics">
                <article className="bg-white p-3 rounded-xl border border-slate-300 text-center shadow-2xs">
                  <span className="block text-xl font-black text-slate-900">28 Min</span>
                  <span className="text-xs text-slate-700 font-medium">Avg Delivery Speed</span>
                </article>
                <article className="bg-white p-3 rounded-xl border border-slate-300 text-center shadow-2xs">
                  <span className="block text-xl font-black text-slate-900">99.9%</span>
                  <span className="text-xs text-slate-700 font-medium">Payment Success</span>
                </article>
                <article className="bg-white p-3 rounded-xl border border-slate-300 text-center shadow-2xs">
                  <span className="block text-xl font-black text-slate-900">Hot Bags</span>
                  <span className="text-xs text-slate-700 font-medium">Thermal Protected</span>
                </article>
              </div>
            </header>

            {/* Live Cart Preview */}
            <aside className="lg:col-span-5">
              <section aria-label="Quick Cart Overview" className="bg-white rounded-2xl border border-slate-300 shadow-xl p-5 space-y-4">
                <header className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true"></span>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">Your Quick Cart</h3>
                  </div>
                  <span className="text-xs font-bold bg-orange-100 text-[#b32b00] px-2.5 py-0.5 rounded-full">
                    {cart?.length || 0} Items
                  </span>
                </header>

                <div className="space-y-3 text-xs sm:text-sm">
                  {cart && cart.length > 0 ? (
                    cart.map((item, idx) => (
                      <article key={idx} className="flex justify-between items-start border-b border-slate-100 pb-2">
                        <div>
                          <span className="font-bold text-slate-900">{item.title || item.name}</span>
                          <p className="text-xs text-slate-600">{item.detail || 'Standard Portion'}</p>
                        </div>
                        <span className="font-bold text-slate-900">₦{item.price?.toLocaleString()}</span>
                      </article>
                    ))
                  ) : (
                    <p className="text-slate-600 text-center py-3 font-medium">Your cart is currently empty.</p>
                  )}

                  {cart && cart.length > 0 && (
                    <>
                      <div className="flex justify-between items-center text-slate-700 pt-1 font-medium">
                        <span>Delivery (Victoria Island)</span>
                        <span>₦{deliveryFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-emerald-700 font-bold">
                        <span>Promo Applied (FUZZYHOT)</span>
                        <span>-₦{discount.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">Total Amount:</span>
                  <span className="text-xl sm:text-2xl font-black text-[#b32b00]">₦{total.toLocaleString()}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={!cart || cart.length === 0}
                  className="w-full bg-[#b32b00] hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b32b00] disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Lock className="w-4 h-4" aria-hidden="true" /> Pay ₦{total.toLocaleString()} with Paystack
                </button>

                <footer className="text-center">
                  <span className="text-xs text-slate-600 font-medium">💳 Cards, USSD, Transfer & Apple Pay Accepted</span>
                </footer>
              </section>
            </aside>

          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section aria-labelledby="reviews-section-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#b32b00] uppercase tracking-wider block mb-1">Lagos Foodie Stories</span>
            <h2 id="reviews-section-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Why Lagos Loves Fuzzy Meals</h2>
            <p className="text-slate-700 text-xs sm:text-sm mt-1 font-normal">Real dining feedback from food lovers across Lekki Phase 1, Victoria Island, and Ikoyi.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <article key={rev.id} className="bg-white p-6 rounded-2xl border border-slate-300 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-amber-500 text-sm mb-3 block" aria-label="5 out of 5 stars">★★★★★</span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed italic font-normal">{rev.text}</p>
                </div>

                <footer className="flex items-center gap-3.5 pt-3 border-t border-slate-200">
                  <span className={`w-9 h-9 rounded-full ${rev.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-2xs`} aria-hidden="true">
                    {rev.initials}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{rev.name}</h3>
                    <span className="text-xs text-slate-600 block font-normal">{rev.location}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </section>

        {/* STAT CARDS SHOWCASE */}
        <aside aria-label="Company statistics milestones" className="flex justify-center items-center w-full py-4 sm:py-6 gap-4 sm:gap-6 flex-wrap">
          <div className="w-full sm:w-auto animate-bounce hover:[animation-play-state:paused] flex justify-center">
            <StatCard number="40+ Years" text="of Nigerian cooking excellence" />
          </div>
          <div className="w-full sm:w-auto animate-bounce [animation-delay:200ms] hover:[animation-play-state:paused] flex justify-center">
            <StatCard number="50+" text="Locations (and still growing)" />
          </div>
          <div className="w-full sm:w-auto animate-bounce [animation-delay:400ms] hover:[animation-play-state:paused] flex justify-center">
            <StatCard number="2,500+" text="Hospitality Professionals trained as caregivers" />
          </div>
        </aside>

      </div>
    </main>
  );
};

export default Hero;
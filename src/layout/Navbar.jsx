import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  MapPin,
  ShoppingBag,
  ShieldCheck,
  ChevronDown,
  Zap,
} from "lucide-react";
import { usePaystackPayment } from "react-paystack";
import { useCart } from "../context/CartContext";
import da from "../assets/da.png";

const Navbar = () => {
  const [location, setLocation] = useState("Victoria Island, Lagos");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Consume shared cart state and setter
  const { cart, setCart } = useCart();

  // Single Add-To-Cart Handler
  const handleAddToCart = (itemName, price) => {
    setCart((prev) => ({
      ...prev,
      count: (prev?.count || 0) + 1,
      total: (prev?.total || 0) + price,
      items: [...(prev?.items || []), { name: itemName, price }],
    }));
  };

  // Handler to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: "customer@example.com",
    amount: (cart?.total > 0 ? cart.total : 5000) * 100, // Dynamic amount in kobo
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxx",
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const handlePayment = () => {
    const onSuccess = (reference) => {
      console.log("Payment successful", reference);
    };

    const onClose = () => {
      console.log("Payment cancelled");
    };

    initializePayment({ onSuccess, onClose });
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm font-sans">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2" aria-label="Main Navigation">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-tight shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700] rounded-lg p-1"
          onClick={closeMobileMenu}
        >
          <img
            src={da}
            alt="Jollof Kitchen & Grill Junction Logo"
            className="w-40 sm:w-40 object-contain"
          />
          
        </Link>

      

        {/* Location Dropdown */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-indigo-800 font-semibold text-sm bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-200">
            <MapPin className="w-4 h-4 text-indigo-700 shrink-0" aria-hidden="true" />
            <div className="relative flex items-center">
              <label htmlFor="navbar-location-select" className="sr-only">Select location</label>
              <select
                id="navbar-location-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="appearance-none bg-transparent pr-5 text-indigo-900 font-bold focus:outline-none cursor-pointer text-sm"
              >
                <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                <option value="Ikeja, Lagos">Ikeja, Lagos</option>
                <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-indigo-700 absolute right-0 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 font-semibold">
          <Link to="/" className="px-4 py-2 text-sm text-slate-700 hover:text-white rounded-full hover:bg-[#a43700] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700]">Home</Link>
          <Link to="/menu" className="px-4 py-2 text-sm text-slate-700 hover:text-white rounded-full hover:bg-[#a43700] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700]">Menu</Link>
          <Link to="/about" className="px-4 py-2 text-sm text-slate-700 hover:text-white rounded-full hover:bg-[#a43700] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700]">About</Link>
          <Link to="/contact" className="px-4 py-2 text-sm text-slate-700 hover:text-white rounded-full hover:bg-[#a43700] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700]">Contact</Link>
          <Link to="/specials" className="px-4 py-2 text-sm text-slate-700 hover:text-white rounded-full hover:bg-[#a43700] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700]">Specials</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <div className="flex items-center gap-1 text-[11px] font-bold tracking-wide text-sky-800 bg-sky-50 border border-sky-300 px-3 py-1 rounded-full shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-sky-700" aria-hidden="true" />
            <span>PAYSTACK SECURED</span>
          </div>

          {/* Cart Button displaying dynamic count */}
          <button
            type="button"
            onClick={handlePayment}
            aria-label="View shopping cart and checkout"
            className="flex items-center gap-2 bg-rose-50 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 text-rose-700 font-bold px-3.5 py-1.5 rounded-full text-sm transition-colors cursor-pointer border border-rose-200"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Cart</span>
            <span className="bg-rose-600 text-white text-xs font-black px-2 py-0.5 rounded-full">
              {cart?.count || 0}
            </span>
          </button>

          <a
            href="https://wa.me/2348061118674"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a43700] hover:bg-[#7f2a00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700] text-white font-bold px-4 py-2 rounded-full text-sm tracking-wide transition-colors shadow-xs"
          >
            Order now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden text-[#a43700] p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700] rounded-lg"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </nav>

      {/* Ticker Banner */}
      <div className="flex animate-marquee bg-rose-50 text-xs py-2 px-4 border-b border-rose-200 items-center justify-between" role="region" aria-label="Live updates">
        <div className="flex items-center gap-2 text-rose-800 font-bold mx-auto">
          <Zap className="w-4 h-4 fill-rose-600 text-rose-600" aria-hidden="true" />
          <span>Island Express Live (25-35m)</span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-3 font-semibold text-slate-800">
            
            {/* Mobile Location Selector */}
            <div className="flex items-center gap-2 bg-indigo-50 px-3.5 py-2 rounded-xl border border-indigo-200 mb-1">
              <MapPin className="w-4 h-4 text-indigo-700 shrink-0" aria-hidden="true" />
              <div className="relative flex items-center w-full">
                <label htmlFor="mobile-navbar-location-select" className="sr-only">Select location</label>
                <select
                  id="mobile-navbar-location-select"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="appearance-none bg-transparent w-full text-indigo-900 font-bold focus:outline-none cursor-pointer text-xs"
                >
                  <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                  <option value="Ikeja, Lagos">Ikeja, Lagos</option>
                  <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
                </select>
                <ChevronDown className="w-4 h-4 text-indigo-700 absolute right-0 pointer-events-none" aria-hidden="true" />
              </div>
            </div>

            <Link to="/" onClick={closeMobileMenu} className="px-4 py-3 rounded-xl text-slate-700 hover:bg-[#a43700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#a43700]">Home</Link>
            <Link to="/menu" onClick={closeMobileMenu} className="px-4 py-3 rounded-xl text-slate-700 hover:bg-[#a43700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#a43700]">Menu</Link>
            <Link to="/about" onClick={closeMobileMenu} className="px-4 py-3 rounded-xl text-slate-700 hover:bg-[#a43700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#a43700]">About</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="px-4 py-3 rounded-xl text-slate-700 hover:bg-[#a43700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#a43700]">Contact</Link>
            <Link to="/specials" onClick={closeMobileMenu} className="px-4 py-3 rounded-xl text-slate-700 hover:bg-[#a43700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#a43700]">Specials</Link>

            {/* Mobile Cart */}
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                handlePayment();
              }}
              className="mt-2 flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-600 text-rose-700 font-bold px-4 py-3 rounded-xl transition-colors cursor-pointer border border-rose-200"
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              <span>Cart</span>
              <span className="bg-rose-600 text-white text-xs font-black px-2.5 py-0.5 rounded-full">
                {cart?.count || 0}
              </span>
            </button>

            <a
              href="https://wa.me/2348061118674"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-1 text-center bg-[#a43700] hover:bg-[#7f2a00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a43700] text-white font-bold px-4 py-3 rounded-xl transition-colors shadow-xs"
            >
              Order now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
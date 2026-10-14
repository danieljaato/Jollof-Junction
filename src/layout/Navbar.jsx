const navLinks = [
  { href: "#/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
   { href: "#contact", label: "Contact" },
];



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
import DAN from "../assets/DAN.png";

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
       
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-tight shrink-0"
          onClick={closeMobileMenu}
        >
          <img
            src={DAN}
            alt="Fuzzy Meals Logo"
            className="w-40 object-contain"
          />
          <span className="text-sm font-bold text-[#a43700]">
            Fuzzy Meals
          </span>
        </Link>

        {/* Location Dropdown */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-indigo-700 font-semibold text-sm">
            <MapPin className="w-4 h-4 text-indigo-600" />
            <div className="relative flex items-center">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="appearance-none bg-transparent pr-5 text-indigo-500 font-semibold focus:outline-none cursor-pointer text-sm"
              >
                <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                <option value="Ikeja, Lagos">Ikeja, Lagos</option>
                <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
              </select>
              <ChevronDown className="w-3 h-3 text-indigo-600 absolute right-0 pointer-events-none" />
            </div>
          </div>
        </div>
                    
                    <div className=" hidden md:flex items-center gap-2">
                      
                        <div className=" glass rounded-full px-2 py-1 items center gap-1">
                           <a href = "/" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">Home</a>
                        <a href = "#about" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">About</a>
                        <a href = "#menu" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">Menu</a>
                        <a href = "#contact" className="px-4 py-2 text-sm  text-muted-foreground hover:text-foreground rounded-full haver:bg-surface">Contact</a>
                       </div>
                    </div>
                    
        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 text-[10px] font-bold tracking-wide text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PAYSTACKSECURED</span>
          </div>

          {/* Cart Button displaying dynamic count */}
          <button
            type="button"
            onClick={handlePayment}
            className="flex items-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold px-3 py-1.5 rounded-full text-sm transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cart</span>
            <span className="bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart?.count || 0}
            </span>
          </button>

          <a
            href="https://wa.me/2348061118674"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a43700] hover:bg-[#7f2a00] text-white font-semibold px-4 py-2 rounded-full text-sm tracking-wide transition-colors"
          >
            Order now
          </a>
        </div>

                    
                   
            
  
            
           
                {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-foreground cursor-pointer"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-muted-foreground hover:text-foreground "
            >
              {link.label}
            </a>
          ))}

          <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
        </div>
               </div>
              ) 
            }
        </header>

    );
};
export default Navbar;
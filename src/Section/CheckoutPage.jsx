import React, { useState } from 'react';

export default function CheckoutPage() {
  // Form states and error simulation matching the screenshot
  const [formData, setFormData] = useState({
    email: '',
    country: 'Nigeria',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: 'Lagos',
    phone: '',
  });

  const [touched, setTouched] = useState({
    email: true,
    firstName: true,
    lastName: true,
    address: true,
    city: true,
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact and Billing Form */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-gray-900">Contact information</h2>
            <div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-red-600 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 placeholder-gray-500 text-sm"
                />
              </div>
              {touched.email && (
                <div className="flex items-center space-x-1.5 mt-1.5 text-red-600 text-xs">
                  <span>⚠️</span>
                  <span>Please enter a valid email address</span>
                </div>
              )}
              <p className="text-gray-500 text-xs mt-1">You are currently checking out as a guest.</p>
            </div>
          </section>

          {/* Billing Address */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl font-medium text-gray-900">Billing address</h2>
            
            {/* Country Dropdown */}
            <div className="relative">
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 text-sm appearance-none"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">
                ▼
              </div>
            </div>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-red-600 rounded-sm focus:outline-none placeholder-gray-500 text-sm"
                />
                {touched.firstName && (
                  <div className="flex items-center space-x-1 mt-1 text-red-600 text-xs">
                    <span>⚠️</span>
                    <span>Please enter a valid first name</span>
                  </div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-red-600 rounded-sm focus:outline-none placeholder-gray-500 text-sm"
                />
                {touched.lastName && (
                  <div className="flex items-center space-x-1 mt-1 text-red-600 text-xs">
                    <span>⚠️</span>
                    <span>Please enter a valid last name</span>
                  </div>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-red-600 rounded-sm focus:outline-none placeholder-gray-500 text-sm"
              />
              {touched.address && (
                <div className="flex items-center space-x-1 mt-1 text-red-600 text-xs">
                  <span>⚠️</span>
                  <span>Please enter a valid address</span>
                </div>
              )}
              <button type="button" className="text-xs text-gray-700 mt-1.5 font-medium hover:underline">
                + Add apartment, suite, etc.
              </button>
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border border-red-600 rounded-sm focus:outline-none placeholder-gray-500 text-sm"
                />
                {touched.city && (
                  <div className="flex items-center space-x-1 mt-1 text-red-600 text-xs">
                    <span>⚠️</span>
                    <span>Please enter a valid city</span>
                  </div>
                )}
              </div>
              <div className="relative">
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none text-sm appearance-none"
                >
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Oyo">Oyo</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">
                  ▼
                </div>
              </div>
            </div>

            {/* Phone (Optional) */}
            <div>
              <input
                type="text"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 placeholder-gray-500 text-sm"
              />
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary Card */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6 shadow-sm sticky top-6">
            <h2 className="text-xl font-medium text-gray-900">Order summary</h2>
            
            {/* Cart Item Row */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {/* Bottle Product Image Placeholder / Mock */}
                  <div className="w-12 h-16 bg-blue-50 border border-gray-100 rounded flex items-center justify-center">
                    <span className="text-xl">🍼</span>
                  </div>
                  <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-700 text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    1
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">WATER-MEDIUM SIZE EVA</h4>
                  <p className="text-xs text-gray-500 mt-0.5">₦500.00</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">₦500.00</span>
            </div>

            {/* Add Coupons Dropdown Accordion */}
            <div className="py-3 border-b border-gray-200 flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:text-black">
              <span>Add coupons</span>
              <span className="text-xs">▼</span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm text-gray-700 pt-1">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">₦500.00</span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold text-gray-900 pt-4 border-t border-gray-200">
              <span>Total</span>
              <span>₦500.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
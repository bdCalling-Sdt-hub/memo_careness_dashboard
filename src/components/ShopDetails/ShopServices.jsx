import React from 'react';

const ShopServices = () => {
  // Services data
  const services = [
    { name: 'Hair cut', price: '€30', time: '40 minutes' },
    { name: 'Beard cut', price: '€25', time: '25 minutes' },
    { name: 'Head massage', price: '€50', time: '60 minutes' },
    { name: 'Arm massage', price: '€20', time: '15 minutes' },
    { name: 'Hair color', price: '€10', time: '10 minutes' },
    { name: 'Beard grooming', price: '€45', time: '20 minutes' },
  ];

  return (
    <div className="w-full px-6 py-8">
      <div className="grid grid-cols-1 gap-8">
        {services.map((service, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 items-center">
            {/* Service Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Service Name</label>
              <input
                type="text"
                value={service.name}
                readOnly
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 pointer-events-none"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Price</label>
              <input
                type="text"
                value={service.price}
                readOnly
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 pointer-events-none"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Time</label>
              <input
                type="text"
                value={service.time}
                readOnly
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopServices;

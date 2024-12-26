import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RecentCustomer = () => {
    const customers = [
        { name: 'Natali Craig', location: 'Berlin' },
        { name: 'Drew Cano', location: 'Berlin' },
        { name: 'Andi Lane', location: 'Berlin' },
        { name: 'Koray Okumus', location: 'Berlin' },
        { name: 'Kate Morrison', location: 'Berlin' },
        { name: 'Melody Macy', location: 'Berlin' },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Recent customers</h2>
            <ul className="space-y-2">
                {customers.map((customer, index) => (
                    <li key={index} className="flex items-center justify-between py-3 px-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100">
                        <div className="flex items-center space-x-3 w-full relative">
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium">
                                {customer.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-semibold text-sm">{customer.name}</p>
                            </div>
                            <p className="text-gray-500 text-xs flex items-center absolute right-0">
                                <FaMapMarkerAlt className="mr-1 text-xs" /> {customer.location}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4 text-right">
                <Link to={`/recent-customers`} className="text-blue-600 hover:text-blue-800">View all →</Link>
            </div>
        </div>
    );
};

export default RecentCustomer;

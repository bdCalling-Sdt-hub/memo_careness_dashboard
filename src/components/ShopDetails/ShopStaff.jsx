import React from "react";

const ShopStaff = () => {
    const staff = [
        {
            name: "Bahram Ferzand",
            rating: "5.0",
            image: "https://via.placeholder.com/100", // Replace with actual staff image URL
        },
        {
            name: "Bahram Ferzand",
            rating: "5.0",
            image: "https://via.placeholder.com/100", // Replace with actual staff image URL
        },
        {
            name: "Bahram Ferzand",
            rating: "5.0",
            image: "https://via.placeholder.com/100", // Replace with actual staff image URL
        },
        {
            name: "Bahram Ferzand",
            rating: "5.0",
            image: "https://via.placeholder.com/100", // Replace with actual staff image URL
        },
    ];

    const timings = [
        {
            days: "Monday to Thursday",
            hours: "09:00 am - 5:00 pm",
        },
        {
            days: "Friday & Saturday",
            hours: "3:00 pm - 7:00 pm",
        },
        {
            days: "Sunday",
            hours: "Closed",
        },
    ];

    return (
        <div className="w-full px-6 py-8 space-y-8">
            {/* Shop Staff Section */}
            <div>
                <h2 className="text-lg font-medium mb-4">Shop Staff</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {staff.map((member, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 p-4 border rounded-md shadow-sm bg-white"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-16 h-16 object-cover rounded-md"
                            />
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700">
                                    {member.name}
                                </h3>
                                <p className="flex items-center space-x-1 bg-teal-600 text-sm text-white w-fit px-2 rounded-md">
                                    <span>{member.rating} ★</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Shop Timings Section */}
            <div>
                <h2 className="text-lg font-medium mb-4">Shop Timings</h2>
                <table className="w-full text-sm text-left border-t border-gray-300">
                    <tbody>
                        {timings.map((timing, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2 font-medium text-gray-700">{timing.days}</td>
                                <td className="py-2 text-gray-600 text-right">{timing.hours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShopStaff;

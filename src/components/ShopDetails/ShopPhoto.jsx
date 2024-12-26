import React from "react";

const ShopPhoto = () => {
    const photos = [
        {
            id: 1,
            url: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            url: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            url: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            url: "https://via.placeholder.com/300",
        },
        {
            id: 5,
            url: "https://via.placeholder.com/300",
        },
    ];

    return (
        <div className="w-full px-6 py-8">
            <h2 className="text-lg font-medium mb-4">Shop Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="rounded-lg overflow-hidden shadow-sm bg-white"
                    >
                        <img
                            src={photo.url}
                            alt={`Shop Photo ${photo.id}`}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPhoto;

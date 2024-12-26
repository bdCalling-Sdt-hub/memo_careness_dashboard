import React, { useState } from "react";
import { Table, Button, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ShopsRegistration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedShop, setSelectedShop] = useState(null);

    const showModal = (shop) => {
        setSelectedShop(shop);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedShop(null);
    };

    const columns = [
        {
            title: "#",
            dataIndex: "index",
            key: "index",
            align: "center",
            width: 50,
        },
        {
            title: "Shop Name",
            dataIndex: "shopName",
            key: "shopName",
            render: (text) => (
                <div className="flex items-center space-x-3">
                    <img
                        src="https://via.placeholder.com/30"
                        alt="shop"
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{text}</span>
                </div>
            ),
        },
        {
            title: "Shop Category",
            dataIndex: "shopCategory",
            key: "shopCategory",
        },
        {
            title: "City",
            dataIndex: "city",
            key: "city",
        },
        {
            title: "Contact",
            dataIndex: "contact",
            key: "contact",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div className="flex space-x-2">
                    <button className="bg-green-100 hover:bg-green-600 hover:text-white text-green-600 border-none rounded-md px-3 py-1 transition-all">
                        Accept
                    </button>
                    <button className="bg-red-100 hover:bg-red-600 hover:text-white text-red-600 border-none rounded-md px-3 py-1 transition-all">
                        Decline
                    </button>
                </div>
            ),
        },
        {
            title: "View Details",
            key: "viewDetails",
            render: (_, record) => (
                <button
                    onClick={() => showModal(record)}
                    className="text-white items-center justify-center bg-[#016A70] text-2xl p-2 py-1 rounded-full"
                >
                    <EyeOutlined />
                </button>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            index: "01",
            shopName: "Cameron Salons",
            shopCategory: "Skin care",
            city: "Berlin",
            contact: "+9724545643",
            shopAddress: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
            shopGenderCategory: "Male",
            shopOwnerName: "Mike Smith",
            email: "sadgfjdg@gmail.com",
            phoneNumber: "+3489 9999 9778",
            bankName: "AB Bank",
            accountHolderName: "Dianne Russell",
            accountNumber: "6575675678676",
            branchCode: "4575467",
            branchCity: "New York",
        },
        // Add more shop objects here...
    ];

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold mb-6">Shops Registration</h1>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    position: ["bottomCenter"],
                    defaultPageSize: 5,
                    showSizeChanger: false,
                    nextIcon: (
                        <button className="absolute right-0 flex justify-center items-center gap-2 w-fit whitespace-nowrap py-0 px-4 rounded-md border-2">
                            Next
                            <FaArrowRight />
                        </button>
                    ),
                    prevIcon: (
                        <button className="absolute left-0 flex justify-center items-center gap-2 w-fit whitespace-nowrap py-0 px-4 rounded-md border-2">
                            <FaArrowLeft /> Previous
                        </button>
                    ),
                }}
                bordered
                rowClassName="text-sm"
            />
            <Modal
                title="Shop Details"
                visible={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
            >
                {selectedShop && (
                    <div>
                        <p>
                            <strong>Shop Name:</strong> {selectedShop.shopName}
                        </p>
                        <p>
                            <strong>Shop Address:</strong> {selectedShop.shopAddress}
                        </p>
                        <p>
                            <strong>Shop Gender Category:</strong>{" "}
                            {selectedShop.shopGenderCategory}
                        </p>
                        <p>
                            <strong>Shop Category:</strong> {selectedShop.shopCategory}
                        </p>
                        <p>
                            <strong>Shop Owner Name:</strong> {selectedShop.shopOwnerName}
                        </p>
                        <p>
                            <strong>Email:</strong> {selectedShop.email}
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {selectedShop.phoneNumber}
                        </p>
                        <h3 className="mt-4 font-bold">Bank Info</h3>
                        <p>
                            <strong>Bank Name:</strong> {selectedShop.bankName}
                        </p>
                        <p>
                            <strong>Account Holder Name:</strong>{" "}
                            {selectedShop.accountHolderName}
                        </p>
                        <p>
                            <strong>Account Number:</strong> {selectedShop.accountNumber}
                        </p>
                        <p>
                            <strong>Branch Code:</strong> {selectedShop.branchCode}
                        </p>
                        <p>
                            <strong>Branch City:</strong> {selectedShop.branchCity}
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ShopsRegistration;

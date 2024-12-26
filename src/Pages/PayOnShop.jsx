import React, { useState } from "react";
import { Table, Button, Input } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";

const PayOnShop = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Table data
    const dataSource = [
        {
            key: "01",
            shopName: "Cameron Salons",
            amount: "$344",
            avatar: "https://via.placeholder.com/40", // Replace with actual image URL
        },
        {
            key: "02",
            shopName: "Nice Beauty Center",
            amount: "$457",
            avatar: "https://via.placeholder.com/40",
        },
        {
            key: "03",
            shopName: "Cameron Salons",
            amount: "$567",
            avatar: "https://via.placeholder.com/40",
        },
        {
            key: "04",
            shopName: "Cameron Salons",
            amount: "$561",
            avatar: "https://via.placeholder.com/40",
        },
        {
            key: "05",
            shopName: "Cameron Salons",
            amount: "$585",
            avatar: "https://via.placeholder.com/40",
        },
        {
            key: "06",
            shopName: "Cameron Salons",
            amount: "$896",
            avatar: "https://via.placeholder.com/40",
        },
        {
            key: "07",
            shopName: "Cameron Salons",
            amount: "$235",
            avatar: "https://via.placeholder.com/40",
        },
        {
            key: "08",
            shopName: "Cameron Salons",
            amount: "$762",
            avatar: "https://via.placeholder.com/40",
        },
    ];

    // Filter data based on the search term
    const filteredData = dataSource.filter((item) =>
        item.shopName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Columns definition
    const columns = [
        {
            title: "#",
            dataIndex: "key",
            key: "key",
            align: "center",
            render: (text) => <span className="text-gray-500">{text}</span>,
        },
        {
            title: "Shop Name",
            dataIndex: "shopName",
            key: "shopName",
            render: (text, record) => (
                <div className="flex items-center">
                    <img
                        src={record.avatar}
                        alt="shop"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-gray-700">{text}</span>
                </div>
            ),
        },
        {
            title: "Amount Need to Pay",
            dataIndex: "amount",
            key: "amount",
            align: "right",
            render: (text) => <span className="text-gray-600">{text}</span>,
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: () => (
                <Button className="bg-green-100 text-green-700 border-none hover:bg-green-200 px-4 py-1 rounded-md">
                    Notify
                </Button>
            ),
        },
    ];

    return (
        <div className="w-full px-6 py-8 bg-white rounded-lg shadow-md">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <Button
                        icon={<FaArrowLeft />}
                        className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 py-1 border rounded-md"
                    />
                    <h1 className="text-xl font-semibold">Pay On Shop (08)</h1>
                </div>
                <Input
                    prefix={<SearchOutlined className="text-gray-400" />}
                    placeholder="Search Shop"
                    className="w-60 h-[42px]"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Table Section */}
            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={{
                    pageSize: 8,
                    showSizeChanger: false,
                    position: ["bottomCenter"],
                    nextIcon: (
                        <Button
                            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border"
                        >
                            Next <FaArrowRight />
                        </Button>
                    ),
                    prevIcon: (
                        <Button
                            icon={<FaArrowLeft />}
                            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border"
                        >
                            Previous
                        </Button>
                    ),
                }}
                bordered
                rowClassName="text-sm"
            />
        </div>
    );
};

export default PayOnShop;

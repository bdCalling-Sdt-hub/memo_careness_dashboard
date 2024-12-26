import React from "react";
import { Table, Input, Select, Button, Switch } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Customers = () => {
    const columns = [
        {
            title: "#",
            dataIndex: "index",
            key: "index",
            align: "center",
        },
        {
            title: "Customer Name",
            dataIndex: "customerName",
            key: "customerName",
            render: (text, record) => (
                <div className="flex items-center space-x-3">
                    <img
                        src={record.image}
                        alt={text}
                        className="w-8 h-8 rounded-full"
                    />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: "City",
            dataIndex: "city",
            key: "city",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Contact",
            dataIndex: "contact",
            key: "contact",
        },
        // {
        //     title: "Spendings",
        //     dataIndex: "spendings",
        //     key: "spendings",
        // },
        {
            title: "Block / Unblock",
            key: "block",
            render: (_, record) => (
                <Switch
                    style={{
                        backgroundColor: "green",
                        // backgroundColor: record.status === "Active" ? "green":"gray",
                    }}
                    defaultChecked
                    // className={record.status === "Active" ? "bg-green-500" : "bg-gray-300"}
                    checkedChildren=""
                    unCheckedChildren=""
                />
            ),
        },
    ];

    const data = [
        {
            key: "1",
            index: "01",
            customerName: "Cameron Williamson",
            city: "Berlin",
            gender: "Male",
            contact: "+9724545643",
            spendings: "€150",
            image: "https://via.placeholder.com/30",
        },
        {
            key: "2",
            index: "02",
            customerName: "Floyd Miles",
            city: "Frankfurt",
            gender: "Female",
            contact: "+9724545643",
            spendings: "€190",
            image: "https://via.placeholder.com/30",
        },
        {
            key: "3",
            index: "03",
            customerName: "Leslie Alexander",
            city: "Berlin",
            gender: "Male",
            contact: "+9724545643",
            spendings: "€150",
            image: "https://via.placeholder.com/30",
        },
        {
            key: "4",
            index: "04",
            customerName: "Dianne Russell",
            city: "Berlin",
            gender: "Male",
            contact: "+9724545643",
            spendings: "€150",
            image: "https://via.placeholder.com/30",
        },
        {
            key: "5",
            index: "05",
            customerName: "Ronald Richards",
            city: "Berlin",
            gender: "Male",
            contact: "+9724545643",
            spendings: "€150",
            image: "https://via.placeholder.com/30",
        },
    ];

    return (
        <div className="w-full py-8">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <Button
                        icon={<FaArrowLeft />}
                        className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 py-1 border rounded-md"
                    />
                    <h1 className="text-xl font-semibold">Customers (1766)</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <Select
                        defaultValue="All customers"
                        options={[
                            { value: "all", label: "All customers" },
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                        ]}
                        className="w-40"
                    />
                    <Input
                        prefix={<AiOutlineSearch className="text-gray-400" />}
                        placeholder="Search"
                        className="w-60"
                    />
                </div>
            </div>

            {/* Table Section */}
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    position: ["bottomCenter"],
                    defaultPageSize: 8,
                    showSizeChanger: false,
                    nextIcon: (
                        <Button
                            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border absolute right-0"
                        >
                            Next <FaArrowRight />
                        </Button>
                    ),
                    prevIcon: (
                        <Button
                            icon={<FaArrowLeft />}
                            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border absolute left-0"
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

export default Customers;

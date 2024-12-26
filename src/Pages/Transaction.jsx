import React, { useState } from "react";
import { Table, Input, Select, Button } from "antd";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";

const Transaction = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Table data
  const dataSource = [
    {
      key: "01",
      date: "12/06/24",
      name: "Cameron Williamson",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
    {
      key: "02",
      date: "11/06/24",
      name: "Floyd Miles",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
    {
      key: "03",
      date: "10/06/24",
      name: "Leslie Alexander",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
    {
      key: "04",
      date: "08/06/24",
      name: "Dianne Russell",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
    {
      key: "05",
      date: "07/06/24",
      name: "Ronald Richards",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
    {
      key: "06",
      date: "04/06/24",
      name: "Savannah Nguyen",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
    {
      key: "07",
      date: "03/06/24",
      name: "Kathryn Murphy",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
    {
      key: "08",
      date: "01/06/24",
      name: "Brooklyn Simmons",
      avatar: "https://via.placeholder.com/40",
      amount: "€150",
      paymentType: "Online Payment",
    },
  ];

  // Filter data based on the search term
  const filteredData = dataSource.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <img
            src={record.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700">{text}</span>
        </div>
      ),
    },
    {
      title: "Paid Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      render: (text) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
      align: "center",
      render: (text) => <span className="text-gray-500">{text}</span>,
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
          <h1 className="text-xl font-semibold">Transaction</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Select
            defaultValue="Customer"
            options={[{ value: "customer", label: "Customer" }]}
            className="w-40"
          />
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search"
            className="w-60"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
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

export default Transaction;

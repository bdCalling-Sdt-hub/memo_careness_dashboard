import React, { useState } from "react";
import { Table, Input, Button, Switch, Popconfirm, message } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { DeleteOutlined } from "@ant-design/icons";

const Category = () => {
    const [categories, setCategories] = useState([
        { key: "1", index: "01", name: "Barbers & Hairdressers", visible: true },
        { key: "2", index: "02", name: "Skin care", visible: true },
        { key: "3", index: "03", name: "Nail salons", visible: true },
        { key: "4", index: "04", name: "Spa & massage", visible: true },
    ]);

    const [newCategory, setNewCategory] = useState("");

    const handleDelete = (key) => {
        setCategories(categories.filter((category) => category.key !== key));
        message.success("Category deleted successfully");
    };

    const handleAddCategory = () => {
        if (!newCategory.trim()) {
            message.error("Category name cannot be empty");
            return;
        }

        const newKey = (categories.length + 1).toString().padStart(2, "0");
        setCategories([
            ...categories,
            { key: newKey, index: newKey, name: newCategory, visible: true },
        ]);
        setNewCategory("");
        message.success("Category added successfully");
    };

    const handleVisibilityToggle = (key, visible) => {
        setCategories(
            categories.map((category) =>
                category.key === key ? { ...category, visible } : category
            )
        );
        message.info(`Category ${visible ? "unhidden" : "hidden"}`);
    };

    const columns = [
        {
            title: "#",
            dataIndex: "index",
            key: "index",
            align: "center",
        },
        {
            title: "Category names",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Hide / Unhide",
            dataIndex: "visible",
            key: "visible",
            render: (visible, record) => (
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
        {
            title: "Delete",
            key: "delete",
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure to delete this category?"
                    onConfirm={() => handleDelete(record.key)}
                    okText="Yes"
                    cancelText="No"
                >
                    <DeleteOutlined
                        className="text-red-500 cursor-pointer hover:text-red-700"
                        style={{ fontSize: "18px" }}
                    />
                </Popconfirm>
            ),
        },
    ];

    return (
        <div className="w-full py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                    <Button
                        icon={<FaArrowLeft />}
                        className="bg-transparent text-gray-700 hover:bg-gray-100 py-1 border rounded-md"
                    />
                    <h1 className="text-xl font-semibold">Categories (04)</h1>
                </div>
            </div>

            <Table
                columns={columns}
                dataSource={categories}
                pagination={false}
                bordered
                rowClassName="text-sm"
            />

            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">+ Add new category</h2>
                <p>Category Name</p>
                <div className="flex items-center space-x-4">
                    <Input
                        placeholder="Enter name"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="w-full h-[42px]"
                    />
                    <button
                        onClick={handleAddCategory}
                        className="bg-[#016A70] hover:bg-[#016A70] text-white px-20 py-2 rounded-md"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Category;

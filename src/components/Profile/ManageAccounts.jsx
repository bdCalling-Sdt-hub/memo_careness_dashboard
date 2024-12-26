import React, { useState } from "react";
import { Table, Switch, Button, Input, Form, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ManageAccounts = () => {
  const [accounts, setAccounts] = useState([
    {
      key: "1",
      name: "Abiha Sunshine",
      email: "abihasunshine@gmail.com",
      password: "AB881987z",
      access: true,
    },
    {
      key: "2",
      name: "Abiha Sunshine",
      email: "abihasunshine@gmail.com",
      password: "AB881987z",
      access: false,
    },
    {
      key: "3",
      name: "Abiha Sunshine",
      email: "abihasunshine@gmail.com",
      password: "AB881987z",
      access: true,
    },
    {
      key: "4",
      name: "Abiha Sunshine",
      email: "abihasunshine@gmail.com",
      password: "AB881987z",
      access: true,
    },
  ]);

  const [form] = Form.useForm();

  const handleAddAccount = (values) => {
    const newAccount = {
      key: (accounts.length + 1).toString(),
      name: values.name,
      email: values.email,
      password: values.password,
      access: true,
    };
    setAccounts([...accounts, newAccount]);
    form.resetFields();
  };

  const handleDelete = (key) => {
    const updatedAccounts = accounts.filter((account) => account.key !== key);
    setAccounts(updatedAccounts);
  };

  const handleAccessChange = (key, checked) => {
    const updatedAccounts = accounts.map((account) =>
      account.key === key ? { ...account, access: checked } : account
    );
    setAccounts(updatedAccounts);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      align: "center",
    },
    {
      title: "Account name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Access",
      dataIndex: "access",
      key: "access",
      align: "center",
      render: (text, record) => (
        <Switch
        style={{
            background:'green'
        }}
          checked={record.access}
          onChange={(checked) => handleAccessChange(record.key, checked)}
        />
      ),
    },
    {
      title: "Delete",
      key: "delete",
      align: "center",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this account?"
          onConfirm={() => handleDelete(record.key)}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined className="text-red-500 cursor-pointer" />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="w-full bg-white p-8 rounded-lg">
      <Table
        columns={columns}
        dataSource={accounts}
        pagination={false}
        bordered
        rowClassName="text-sm"
      />

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-600 mb-4">+ Add new account</h3>
        <Form form={form} layout="vertical" onFinish={handleAddAccount}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Form.Item
              name="name"
              label="Account name"
              rules={[{ required: true, message: "Please enter account name!" }]}
            >
              <Input className="h-[42px]" placeholder="Enter name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input className="h-[42px]" placeholder="Enter email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Enter password"
              rules={[
                { required: true, message: "Please enter a password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password className="h-[42px]" placeholder="Enter password" />
            </Form.Item>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <Button htmlType="button" className="border border-gray-300 text-gray-700 hover:bg-gray-100">
              Clear
            </Button>
            <Button
              htmlType="submit"
              type="primary"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Add
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ManageAccounts;

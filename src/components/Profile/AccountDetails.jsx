import React from "react";
import { Form, Input, Button } from "antd";

const AccountDetails = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
    alert("Changes saved successfully!");
  };

  return (
    <div className="w-full bg-white p-8 rounded-lg">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          bankName: "The bank Islami",
          accountName: "Abiha Sunshine",
          accountNumber: "478437437439889",
          branchCode: "3459",
        }}
      >
        {/* Bank Name */}
        <Form.Item
          label="Bank Name"
          name="bankName"
          rules={[{ required: true, message: "Please enter the bank name!" }]}
        >
          <Input className="h-[42px]"/>
        </Form.Item>

        {/* Account Name */}
        <Form.Item
          label="Account Name"
          name="accountName"
          rules={[
            { required: true, message: "Please enter the account name!" },
          ]}
        >
          <Input className="h-[42px]"/>
        </Form.Item>

        {/* Account Number */}
        <Form.Item
          label="Account Number"
          name="accountNumber"
          rules={[
            { required: true, message: "Please enter the account number!" },
            {
              pattern: /^\d+$/,
              message: "Account number must contain only numbers!",
            },
          ]}
        >
          <Input className="h-[42px]"/>
        </Form.Item>

        {/* Branch Code */}
        <Form.Item
          label="Branch Code"
          name="branchCode"
          rules={[
            { required: true, message: "Please enter the branch code!" },
            {
              pattern: /^\d+$/,
              message: "Branch code must contain only numbers!",
            },
          ]}
        >
          <Input className="h-[42px]"/>
        </Form.Item>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <Button
            htmlType="button"
            className="border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Save changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AccountDetails;

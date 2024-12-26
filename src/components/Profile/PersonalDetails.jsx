import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  const [form] = Form.useForm();
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/100");

  const handleImageUpload = ({ file }) => {
    if (file.status === "done") {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        message.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file.originFileObj);
    } else if (file.status === "error") {
      message.error("Image upload failed!");
    }
  };

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Changes saved successfully!");
  };

  return (
    <div className="w-full bg-white p-8 rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <Upload
              showUploadList={false}
              accept="image/*"
              customRequest={({ file, onSuccess }) => {
                setTimeout(() => onSuccess("ok"), 0); // Mock upload
              }}
              onChange={handleImageUpload}
            >
              <div className="absolute bottom-6 right-0 bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
                <PlusOutlined />
              </div>
            </Upload>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Abiha Sunshine</h1>
            <p className="text-gray-500">abihasunshine@gmail.com</p>
          </div>
        </div>
        <Link to={`/change-password`} className="px-4 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 flex items-center">
          Change password
          <span className="ml-2">↗</span>
        </Link>
      </div>

      {/* Form Section */}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          personalName: "Abiha Sunshine",
          email: "abihasunshine@gmail.com",
          contact: "+7838737999",
        }}
      >
        {/* Personal Name */}
        <Form.Item
          label="Personal Name"
          name="personalName"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input className="h-[42px]" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input className="h-[42px]" />
        </Form.Item>

        {/* Contact */}
        <Form.Item
          label="Contact"
          name="contact"
          rules={[
            { required: true, message: "Please enter your contact number!" },
            {
              pattern: /^\+?\d+$/,
              message: "Please enter a valid phone number!",
            },
          ]}
        >
          <Input className="h-[42px]" />
        </Form.Item>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <Button htmlType="button" className="border border-gray-300 text-gray-700 hover:bg-gray-100">
            Cancel
          </Button>
          <Button htmlType="submit" type="primary" className="bg-teal-600 hover:bg-teal-700 text-white">
            Save changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PersonalDetails;

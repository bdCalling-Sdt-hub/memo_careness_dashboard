import React, { useState } from "react";
import { Tabs } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import PersonalDetails from "../components/Profile/PersonalDetails";
import AccountDetails from "../components/Profile/AccountDetails";
import ManageAccounts from "../components/Profile/ManageAccounts.JSX";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("1");

  const items = [
    {
      key: "1",
      label: (
        <span
          className={`${activeTab === "1" ? "text-teal-600 font-medium" : "text-gray-600"
            }`}
        >
          Personal details
        </span>
      ),
      children: <PersonalDetails />,
    },
    {
      key: "2",
      label: (
        <span
          className={`${activeTab === "2" ? "text-teal-600 font-medium" : "text-gray-600"
            }`}
        >
          Account details
        </span>
      ),
      children: <AccountDetails />,
    },
    {
      key: "3",
      label: (
        <span
          className={`${activeTab === "3" ? "text-teal-600 font-medium" : "text-gray-600"
            }`}
        >
          Manage accounts
        </span>
      ),
      children: <ManageAccounts />,
    },
  ];

  return (
    <div className="w-full px-6 py-8 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center space-x-2 mb-6">
        <button className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 py-1 px-3 border rounded-md">
          <FaArrowLeft />
        </button>
        <h1 className="text-xl font-semibold">Your account</h1>
      </div>

      {/* Tabs Section */}
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={items}
        tabBarStyle={{
          borderBottom: "1px solid #e0e0e0",
        }}
        className="custom-tabs"
      />
    </div>
  );
};

export default Profile;

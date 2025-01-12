import React from 'react'
import { Table, Input, Select, Button, Switch, Dropdown, Menu } from 'antd'
import { AiOutlineSearch, AiOutlineStar } from 'react-icons/ai'
import { FaArrowLeft, FaArrowRight, FaFilter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Shops = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      render: (text) => <span className="text-gray-500">{text}</span>,
    },
    {
      title: 'Shop Name',
      dataIndex: 'shopName',
      key: 'shopName',
      render: (text, record) => (
        <div
          onClick={() => navigate('/shop-details/id')}
          className="flex items-center space-x-3 cursor-pointer select-none"
        >
          <img src={record.image} alt="shop" className="w-8 h-8 rounded-full" />
          <span className="font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <div className="flex items-center space-x-1 text-yellow-500">
          <AiOutlineStar />
          <span>{rating}</span>
        </div>
      ),
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span
          className={`px-4 py-1 rounded-full text-sm ${
            status === 'Active'
              ? 'bg-green-100 text-green-600'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Block / Unblock',
      key: 'block',
      render: (_, record) => (
        <Switch
          style={{
            backgroundColor: 'green',
            // backgroundColor: record.status === "Active" ? "green":"gray",
          }}
          defaultChecked
          checkedChildren=""
          unCheckedChildren=""
        />
      ),
    },
  ]

  const data = [
    {
      key: '1',
      index: '01',
      shopName: 'Cameron Salons',
      city: 'Berlin',
      rating: 5.0,
      contact: '+9724545643',
      status: 'Active',
      image: 'https://via.placeholder.com/30',
    },
    {
      key: '2',
      index: '02',
      shopName: 'Nice Beauty Center',
      city: 'Frankfurt',
      rating: 5.0,
      contact: '+9724545643',
      status: 'Inactive',
      image: 'https://via.placeholder.com/30',
    },
    {
      key: '3',
      index: '03',
      shopName: 'Cameron Salons',
      city: 'Berlin',
      rating: 5.0,
      contact: '+9724545643',
      status: 'Active',
      image: 'https://via.placeholder.com/30',
    },
  ]

  const filterMenu = (
    <Menu
      items={[
        { key: '1', label: 'Filter by Rating' },
        { key: '2', label: 'Filter by City' },
        { key: '3', label: 'Filter by Status' },
      ]}
    />
  )

  return (
    <div className="w-full py-8">
      <div className="mb-6 flex-col">
        <div
          className="flex items-center space-x-2"
          onClick={() => navigate(-1)}
        >
          <Button
            icon={<FaArrowLeft />}
            className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 py-1 border rounded-md"
          />
          <h1 className="text-xl font-semibold">Shops (135)</h1>
        </div>
        <div className="flex items-center justify-between mt-3 space-x-4">
          <div className="flex items-center space-x-4">
            {/* <Select
                            defaultValue="All time"
                            options={[
                                { value: "All time", label: "All time" },
                                { value: "This month", label: "This month" },
                                { value: "This week", label: "This week" },
                            ]}
                            className="w-32"
                        /> */}
            <Dropdown overlay={filterMenu} trigger={['click']}>
              <Button
                icon={<FaFilter />}
                className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 px-3 py-1 border rounded-md"
              >
                Filter
              </Button>
            </Dropdown>
          </div>
          <Input
            prefix={<AiOutlineSearch className="text-gray-400" />}
            placeholder="Search"
            className="w-60"
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          position: ['bottomCenter'],
          defaultPageSize: 8,
          showSizeChanger: false,
          nextIcon: (
            <Button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border absolute right-0">
              Next <FaArrowRight />
            </Button>
          ),
          prevIcon: (
            <Button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border absolute left-0">
              <FaArrowLeft /> Previous
            </Button>
          ),
        }}
        bordered
        rowClassName="text-sm"
      />
    </div>
  )
}

export default Shops

import { Table, Button } from 'antd'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
    },
    {
      title: 'Category names',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: (text) => (
        <Link to={`/services/365415`} className="select-none cursor-pointer">
          {text}
        </Link>
      ),
    },
    {
      title: 'No. of services',
      dataIndex: 'noOfServices',
      key: 'noOfServices',
      render: (text) => `${text} services`,
    },
    // {
    //   title: "Profit on category",
    //   dataIndex: "profit",
    //   key: "profit",
    //   render: (text) => `${text}%`,
    // },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
      render: (text) => `€${text}`,
    },
  ]

  const data = [
    {
      key: '1',
      index: '01',
      categoryName: 'Barbers & Hairdressers',
      noOfServices: 87,
      profit: 20,
      sales: 6879,
    },
    {
      key: '2',
      index: '02',
      categoryName: 'Skin care',
      noOfServices: 89,
      profit: 20,
      sales: 7890,
    },
    {
      key: '3',
      index: '03',
      categoryName: 'Nail Salons',
      noOfServices: 65,
      profit: 20,
      sales: 4576,
    },
    {
      key: '4',
      index: '04',
      categoryName: 'Spa & massage',
      noOfServices: 70,
      profit: 20,
      sales: 1800,
    },
  ]

  return (
    <div className="w-full py-8">
      <div
        className="mb-6 flex items-center space-x-2"
        onClick={() => navigate(-1)}
      >
        <Button
          icon={<FaArrowLeft />}
          className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 py-1 border rounded-md"
        />
        <h1 className="text-xl font-semibold">Service Categories (04)</h1>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        rowClassName="text-sm"
      />
    </div>
  )
}

export default Services

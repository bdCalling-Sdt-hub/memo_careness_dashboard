import { Table, Input, Select, Button } from 'antd'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'

const CategoryDetails = () => {
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      render: (text) => <span className="text-gray-500">{text}</span>,
    },
    {
      title: 'Service names',
      dataIndex: 'serviceName',
      key: 'serviceName',
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
      render: (sales) => <span>€{sales}</span>,
    },
  ]

  const data = [
    { key: '1', index: '01', serviceName: 'Hair cut', sales: '6879' },
    { key: '2', index: '02', serviceName: 'Beard cut', sales: '7890' },
    { key: '3', index: '03', serviceName: 'Beard massage', sales: '4576' },
    { key: '4', index: '04', serviceName: 'Hair cut', sales: '1800' },
    { key: '5', index: '05', serviceName: 'Beard cut', sales: '1800' },
    { key: '6', index: '06', serviceName: 'Hair cut', sales: '1800' },
    { key: '7', index: '07', serviceName: 'Deep massage', sales: '1800' },
    { key: '8', index: '08', serviceName: 'Hair cut', sales: '1800' },
    { key: '9', index: '09', serviceName: 'Deep massage', sales: '1800 ' },
  ]

  return (
    <div className="w-full py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Button
            icon={<FaArrowLeft />}
            className="bg-transparent text-gray-700 hover:bg-gray-100 py-1 border rounded-md"
          />
          <h1 className="text-xl font-semibold">Barbers & Hairdressers</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Select
            defaultValue="All services"
            options={[{ value: 'All services', label: 'All services' }]}
            className="w-40"
          />
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
            <Button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border">
              Next <FaArrowRight />
            </Button>
          ),
          prevIcon: (
            <Button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border">
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

export default CategoryDetails

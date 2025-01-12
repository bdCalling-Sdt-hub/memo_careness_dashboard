import { useState } from 'react'
import { Tabs, Switch, Button } from 'antd'
import { FaArrowLeft } from 'react-icons/fa'
import PersonalDetails from '../components/ShopDetails/Personaldetails'
import AccountDetails from '../components/ShopDetails/AccountDetails'
import ShopServices from '../components/ShopDetails/ShopServices'
import ShopProducts from '../components/ShopDetails/ShopProducts'
import ShopStaff from '../components/ShopDetails/ShopStaff'
import ShopPhoto from '../components/ShopDetails/ShopPhoto'

const { TabPane } = Tabs

const ShopDetails = () => {
  const [isActive, setIsActive] = useState(true)

  const handleSwitchChange = (checked) => {
    setIsActive(checked)
  }

  return (
    <div className="w-full py-8 px-6 ShopDetails">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            icon={<FaArrowLeft />}
            className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 py-1 border rounded-md"
          />
          <h1 className="text-xl font-semibold">Clients &gt; Cameron Salons</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium">Active</span>
          <Switch
            checked={isActive}
            onChange={handleSwitchChange}
            className={isActive ? 'bg-green-500' : 'bg-gray-300'}
          />
        </div>
      </div>

      <Tabs defaultActiveKey="1" className="mb-6">
        {/* Personal Details Tab */}
        <TabPane tab="Personal details" key="1">
          <PersonalDetails />
        </TabPane>

        {/* Account Details Tab */}
        <TabPane tab="Account details" key="2">
          <AccountDetails />
        </TabPane>

        {/* Other Tabs */}
        <TabPane tab="Shop services" key="3">
          <ShopServices />
        </TabPane>
        <TabPane tab="Shop products" key="4">
          <ShopProducts />
        </TabPane>
        <TabPane tab="Staff & timings" key="5">
          <ShopStaff />
        </TabPane>
        <TabPane tab="Shop photos" key="6">
          <ShopPhoto />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default ShopDetails

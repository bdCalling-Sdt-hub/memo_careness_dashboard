import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { MdNotificationsNone } from 'react-icons/md'
import { Popover, Switch } from 'antd'
import { Link } from 'react-router-dom'
import { useGetProfileInformationQuery } from '../../Redux/profileApis'
import { url } from '../../Redux/server'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { data } = useGetProfileInformationQuery()
  const [profileImage, setProfileImage] = useState(null)

  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  // setProfileImage(data?.data?.profile_image)
  const notifications = [
    {
      id: 1,
      message: 'A new shop is registered named ‘Monday salons’',
      time: '3:58 pm - Tue',
    },
    {
      id: 2,
      message: 'Smith has canceled the appointment for a haircut.',
      time: '3:58 pm - Tue',
    },
    {
      id: 3,
      message: 'A payment of $5 has been received from John for Haircut.',
      time: '3:58 pm - Tue',
    },
    {
      id: 4,
      message: '34 clients have registered in the past 7 days.',
      time: '3:58 pm - Tue',
    },
    {
      id: 5,
      message: '10 new customers have registered today.',
      time: '3:58 pm - Tue',
    },
  ]

  const NotificationContent = () => (
    <div className="w-96 max-h-[500px] overflow-y-auto bg-white rounded-md shadow-md border">
      {/* Header */}
      <div className="border-b">
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <button className="text-blue-500 text-sm hover:underline">
            Mark all as read
          </button>
        </div>
        {/* Notifications */}
        <div className="p-4 flex items-center justify-between">
          <p className="text-gray-800 font-semibold">All (24)</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-700">Notifications</p>
            <Switch
              checked={notificationsEnabled}
              onChange={(checked) => setNotificationsEnabled(checked)}
              className={`${
                notificationsEnabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
          </div>
        </div>
      </div>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex items-start gap-3 p-4 border-b last:border-none"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-800">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            {/* <button className="text-sm text-teal-600 mt-2 hover:underline text-end  block w-full">
                            View details &gt;
                        </button> */}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="flex justify-between  items-center bg-[#FFFFFF] p-3 rounded-md relative">
      <p className="text-2xl text-[#016A70]">Carenes Statistics</p>
      <div className="flex justify-end items-center gap-2">
        <Popover
          content={NotificationContent}
          trigger="click"
          placement="bottomRight"
          visible={visible}
          onVisibleChange={(visible) => setVisible(visible)}
          overlayClassName="notification-popover"
        >
          <button className="text-2xl text-[#016A70] p-2 rounded-full border relative">
            <MdNotificationsNone />
            <GoDotFill className="text-red-500 absolute text-base top-2 right-[15%]" />
          </button>
        </Popover>

        <button className="flex justify-end gap-2 items-center border-2 rounded-md p-1 px-2">
          <img
            src={
              data?.data?.profile_image
                ? `${url}/${data?.data?.profile_image}`
                : `https://placehold.co/400`
            }
            className="w-10 h-10 border rounded-full object-cover"
            alt=""
          />
          <Link to={`/profile`} className="text-left">
            <p className="text-sm font-semibold">{data?.data?.name}</p>
            <p className="text-xs text-gray-500">{data?.data?.email}</p>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar

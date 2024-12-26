import React from 'react';
import { Table, Input, Select, Button } from 'antd';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

const Staff = () => {
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
            align: 'center',
            render: (text) => <span className="text-gray-500">{text}</span>,
        },
        {
            title: 'Staff Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center space-x-3">
                    <img
                        src={record.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{text}</span>
                </div>
            ),
        },
        {
            title: 'Shop',
            dataIndex: 'shop',
            key: 'shop',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Sales',
            dataIndex: 'sales',
            key: 'sales',
            render: (sales) => <span>€{sales}</span>,
        },
    ];

    const data = [
        {
            key: '1',
            index: '01',
            name: 'Albert Flores',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
        },
        {
            key: '2',
            index: '02',
            name: 'Eleanor Pena',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
        },
        {
            key: '3',
            index: '03',
            name: 'Bessie Cooper',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
        },
        {
            key: '4',
            index: '04',
            name: 'Ronald Richards',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
        },
        {
            key: '5',
            index: '05',
            name: 'Ralph Edwards',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
        },
        {
            key: '6',
            index: '06',
            name: 'Wade Warren',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
        },
        {
            key: '7',
            index: '07',
            name: 'Dianne Russell',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
        },
        {
            key: '8',
            index: '08',
            name: 'Darlene Robertson',
            shop: 'Monday salons',
            contact: '+9724545643',
            sales: '1200',
            avatar: 'https://via.placeholder.com/40',
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
                    <h1 className="text-xl font-semibold">Staff (390)</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <Select
                        defaultValue="All staff"
                        options={[{ value: 'All staff', label: 'All staff' }]}
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
                        <Button
                            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border"
                        >
                            Next <FaArrowRight />
                        </Button>
                    ),
                    prevIcon: (
                        <Button
                            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md border"
                        >
                            <FaArrowLeft /> Previous
                        </Button>
                    ),
                }}
                bordered
                rowClassName="text-sm"
            />
        </div>
    );
};

export default Staff;

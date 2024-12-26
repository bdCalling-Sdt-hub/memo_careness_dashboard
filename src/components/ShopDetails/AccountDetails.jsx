import { Input } from 'antd'
import React from 'react'

const AccountDetails = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Bank Name
                </label>
                <Input value="The Bank Islami" readOnly />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Account Name
                </label>
                <Input value="Aina Perwana" readOnly />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Account Number
                </label>
                <Input value="38454858454040" readOnly />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Branch Code
                </label>
                <Input value="7648" readOnly />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Bank City</label>
                <Input value="Tehran, Iran" readOnly />
            </div>
        </div>
    )
}

export default AccountDetails

import { Input } from "antd";
const PersonalDetails = () => {
    return <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div>
            <label className="block text-gray-700 font-medium mb-2">
                Personal Name
            </label>
            <Input value="Aina Perwana" readOnly />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-2">
                Shop Name
            </label>
            <Input value="Cameron Saloons" readOnly />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-2">
                Shop Type
            </label>
            <Input value="Skin care" readOnly />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <Input value="ainaperwana@gmail.com" readOnly />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-2">
                Contact
            </label>
            <Input value="+94839379289" readOnly />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <Input value="Tehran, Iran" readOnly />
        </div>
    </div>

}

export default PersonalDetails

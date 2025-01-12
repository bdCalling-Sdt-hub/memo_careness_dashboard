import { useState } from 'react'
import JoditEditor from 'jodit-react'
import { useNavigate } from 'react-router-dom'
import {
  useCreateAdminMutation,
  useGetAllAdminInformationQuery,
} from '../Redux/manageAccountsApis'

const TermsConditions = () => {
  const navigate = useNavigate()
  const [content, setContent] = useState('')

  const {
    data: termsData,
    isLoading,
    isError,
  } = useGetAllAdminInformationQuery()
  const [createTasks] = useCreateAdminMutation()

  // Handle Clear action
  const handleClear = () => {
    setContent('')
  }

  // Handle Save action
  const handleSave = () => {
    console.log('Saved Content:', content)
    alert('Terms & Conditions saved successfully!')
  }

  return (
    <div className="w-full px-6 py-8 bg-white rounded-lg shadow-md mt-6">
      {/* Header Section */}
      <div
        className="flex items-center space-x-2 mb-6"
        onClick={() => navigate(-1)}
      >
        <button className="flex items-center justify-center bg-transparent text-gray-700 hover:bg-gray-100 py-1 px-3 border rounded-md">
          &#8592; {/* Left Arrow */}
        </button>
        <h1 className="text-xl font-semibold">Terms & Conditions</h1>
      </div>

      {/* Editor Section */}
      <div className="mb-4">
        <JoditEditor
          id="editor"
          value={content}
          onBlur={(newContent) => setContent(newContent)}
          config={{
            buttons:
              'bold,italic,underline,|,ul,ol,|,h1,h2,paragraph,|,align,|,image,link,|,source',
            height: 400,
            placeholder: 'Type anything...',
          }}
          className="border rounded-md"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleClear}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
        >
          Clear
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default TermsConditions

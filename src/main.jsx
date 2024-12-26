import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import ContextProvider from './Provider/ContextProvider.jsx'
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Provider>
  </StrictMode>,
)

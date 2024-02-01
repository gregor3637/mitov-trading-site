import React from 'react'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import Layout from './components/Layout'
import Investments from './pages/Investments'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Investments />} />
            <Route path="settings" element={<h1>@VVVVVVVVVVVVV</h1>} />
            <Route path="*" element={<h1>@XXXXXXXXXXXXXXXXX</h1>} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App

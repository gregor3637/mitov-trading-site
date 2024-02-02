import React from 'react'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import Layout from './components/Layout'
import Investments, { loader as investmentsLoader } from './pages/Investments'
import Settings, {
    loader as settingsLoader,
    action as settingsAction,
} from './pages/Settings'
import Error from './pages/Error'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route
                index
                element={<Investments />}
                loader={investmentsLoader}
                errorElement={<Error />}
            />
            <Route
                path="settings"
                element={<Settings />}
                loader={settingsLoader}
                action={settingsAction}
                errorElement={<Error />}
            />
            <Route path="*" element={<h1>@XXXXXXXXXXXXXXXXX</h1>} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App

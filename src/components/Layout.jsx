import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './navigation/Footer'
import Header from './navigation/Header'
import Sidebar from './navigation/Sidebar'

const width = window.innerWidth
const SMALL_SCREEN_WIDTH = 640

const Layout = () => {
    const [isNavOpen, setIsNavOpen] = useState(width > SMALL_SCREEN_WIDTH)

    const topHandler = () => {
        setIsNavOpen((v) => !v)
    }

    return (
        <div>
            <Header isOpen={isNavOpen} setIsOpen={topHandler} />
            <div>
                <Sidebar isOpen={isNavOpen} onSidebarClose={topHandler} />
                <main className={`${isNavOpen ? 'sm:ml-[250px]' : 'sm:ml-[100px]'}`}>
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default Layout

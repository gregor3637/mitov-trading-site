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
        <div className="site-wrapper flex flex-col">
            <Header isOpen={isNavOpen} setIsOpen={topHandler} />
            <div className={`mt-[40px] flex sm:mt-0 `}>
                <Sidebar isOpen={isNavOpen} onSidebarClose={topHandler} />
                <main className="flex-1">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default Layout

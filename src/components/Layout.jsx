import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useClickAway, useWindowSize } from '@uidotdev/usehooks'
import Footer from './navigation/Footer'
import Header from './navigation/Header'
import Sidebar from './navigation/Sidebar'
import { useSelector } from 'react-redux'

const width = window.innerWidth
const SMALL_SCREEN_WIDTH = 640

const Layout = () => {
    const [isNavOpen, setIsNavOpen] = useState(width > SMALL_SCREEN_WIDTH)
    const {isNewInvestmentOpen, isCloseInvestmentOpen} = useSelector(selectModalState)
    const size = useWindowSize()
    const ref = useClickAway(() => {
        if (size.width < 640) {
            setIsNavOpen(false)
        }
    })

    const topHandler = () => {
        setIsNavOpen((v) => !v)
    }

    return (
        <div>
            {isNewInvestmentOpen && (
                <NewInvestmentModal onClose={handleCloseModal} />
            )}
            {isCloseInvestmentOpen && (
                <CloseInvestmentModal
                    onClose={handleCloseModal}
                    closingInvestmentData={investments[0]}
                />
            )}
            <Header isOpen={isNavOpen} setIsOpen={topHandler} />
            <div>
                <Sidebar
                    isOpen={isNavOpen}
                    onSidebarClose={topHandler}
                    ref={ref}
                />
                <main
                    className={`${isNavOpen ? 'sm:ml-[250px]' : 'sm:ml-[100px]'}`}
                >
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default Layout

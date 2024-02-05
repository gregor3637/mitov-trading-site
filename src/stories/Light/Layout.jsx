import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useClickAway, useWindowSize } from '@uidotdev/usehooks'
import Footer from '../../components/navigation/Footer'
import Header from '../../components/navigation/Header'
import Sidebar from '../../components/navigation/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectModalState,
    setIsCloseInvestmentOpen,
    setIsNewInvestmentOpen,
} from '../../services/store/reducers/modalSlice'
import NewInvestmentModal from '../../components/modal/NewInvestment/NewInvestmentModal'
import CloseInvestmentModal from '../../components/modal/closeInvestment/CloseInvestmentModal'

const width = window.innerWidth
const SMALL_SCREEN_WIDTH = 640

const Layout = () => {
    const [isNavOpen, setIsNavOpen] = useState(width > SMALL_SCREEN_WIDTH)
    const size = useWindowSize()
    const ref = useClickAway(() => {
        if (size.width < 640) {
            setIsNavOpen(false)
        }
    })

    const { isNewInvestmentOpen, isCloseInvestmentOpen, closingInvestment } =
        useSelector(selectModalState)
    const dispatch = useDispatch()

    const topHandler = () => {
        setIsNavOpen((v) => !v)
    }

    return (
        <div>
            {isNewInvestmentOpen && (
                <NewInvestmentModal
                    onClose={() => dispatch(setIsNewInvestmentOpen(false))}
                />
            )}
            {isCloseInvestmentOpen && (
                <CloseInvestmentModal
                    onClose={() => dispatch(setIsCloseInvestmentOpen(false))}
                    invData={closingInvestment}
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

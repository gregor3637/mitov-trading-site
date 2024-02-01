import { forwardRef, useEffect, useState } from 'react'
import { FaCog, FaChartPie, FaRegMoon, FaExpandAlt } from 'react-icons/fa'
import { ImShrink2 } from 'react-icons/im'
import { IoSunnySharp } from 'react-icons/io5'
import SidebarLayout from './SidebarLayout/SidebarLayout'

const ICON_SIZE = 20

const Sidebar = forwardRef(({ isOpen, onSidebarClose }, ref) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.dataset.theme = 'dark'
        } else {
            document.documentElement.dataset.theme = ''
        }
    }, [isDarkMode])

    return (
        <div ref={ref}>
            <SidebarLayout
                isOpen={isOpen}
                avatar={<SidebarLayout.Avatar />}
                topButtons={
                    <SidebarLayout.Link to="/">
                        <SidebarLayout.ButtonIcon
                            icon={<FaChartPie size={ICON_SIZE} />}
                        />
                        <SidebarLayout.ButtonLabel label="Investments" />
                    </SidebarLayout.Link>
                }
                bottomButtons={
                    <>
                        <SidebarLayout.Link to="settings">
                            <SidebarLayout.ButtonIcon
                                icon={<FaCog size={ICON_SIZE} />}
                            />
                            <SidebarLayout.ButtonLabel label="Settings" />
                        </SidebarLayout.Link>
                        <SidebarLayout.Button
                            onClick={onSidebarClose}
                            className="!hidden sm:!flex"
                        >
                            <SidebarLayout.ButtonIcon
                                icon={
                                    isOpen ? (
                                        <ImShrink2 size={ICON_SIZE} />
                                    ) : (
                                        <FaExpandAlt size={ICON_SIZE} />
                                    )
                                }
                            />
                            <SidebarLayout.ButtonLabel
                                label={isDarkMode ? 'Expand' : 'Collapse'}
                            />
                        </SidebarLayout.Button>
                        <SidebarLayout.Button
                            onClick={() => setIsDarkMode((v) => !v)}
                        >
                            <SidebarLayout.ButtonIcon
                                icon={
                                    isDarkMode ? (
                                        <IoSunnySharp size={ICON_SIZE} />
                                    ) : (
                                        <FaRegMoon size={ICON_SIZE} />
                                    )
                                }
                            />
                            <SidebarLayout.ButtonLabel
                                label={`${isDarkMode ? 'Light' : 'Dark'} Mode`}
                            />
                        </SidebarLayout.Button>
                    </>
                }
            />
        </div>
    )
})

export default Sidebar

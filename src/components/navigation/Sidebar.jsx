import { useEffect, useState } from 'react'
import { FaCog, FaChartPie, FaRegMoon, FaExpandAlt } from 'react-icons/fa'
import { ImShrink2 } from 'react-icons/im'
import { IoSunnySharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import SidebarButton from './SidebarButton'

const ICON_SIZE = 20

const Sidebar = ({ isOpen, onSidebarClose }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (isDarkMode) {
            // document.documentElement.classList.add("dark");
            document.documentElement.dataset.theme = 'dark'
        } else {
            document.documentElement.dataset.theme = ''
        }
    }, [isDarkMode])

    return (
        <div
            className={`
                absolute h-full z-[100]
                sm:static sm:w-[250px]
                ${isOpen ? '' : 'sm:!w-[100px]'}
          `}
        >
            <div
                className={`
                    fixed flex h-[calc(100vh-40px)] w-[250px] flex-col justify-between whitespace-nowrap bg-[--sidebar-color]  p-4
                    sm:h-full  border-r-2  border-[--edge]
                    ${isOpen ? '' : '-translate-x-full sm:!w-[100px] sm:translate-x-0'}
                `}
            >
                <div>
                    <NavLink className={`nav-elem border-b-2 `}>
                        <div className="flex h-[40px] min-w-[60px] items-center justify-center">
                            <div className="absolute flex h-[50px] w-[50px] items-center justify-center rounded-xl  text-[--text-color]">
                                <img
                                    src="./avatar.png"
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="mx-2 ml-2 flex flex-col overflow-hidden text-xl leading-tight text-[--text-color]">
                            <span>John</span>
                            <span>Smith Jr.</span>
                        </div>
                    </NavLink>
                    <div className="mt-4">
                        <SidebarButton
                            isHoverable
                            left={<FaChartPie size={ICON_SIZE} />}
                            right="Investments"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <SidebarButton
                        isHoverable
                        left={<FaCog size={ICON_SIZE} />}
                        right="Settings"
                    />
                    <div className="hidden sm:block">
                        <SidebarButton
                            onClick={onSidebarClose}
                            left={
                                isOpen ? (
                                    <ImShrink2 size={30} />
                                ) : (
                                    <FaExpandAlt size={30} />
                                )
                            }
                            right={isDarkMode ? 'Expand' : 'Collapse'}
                        />
                    </div>
                    <SidebarButton
                        onClick={() => setIsDarkMode((v) => !v)}
                        left={
                            isDarkMode ? (
                                <IoSunnySharp size={ICON_SIZE} />
                            ) : (
                                <FaRegMoon size={ICON_SIZE} />
                            )
                        }
                        right={`${isDarkMode ? 'Light' : 'Dark'} Mode`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

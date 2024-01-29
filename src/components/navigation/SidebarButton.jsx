import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarButton = ({ isHoverable, onClick, left, right }) => {
    return (
        <NavLink
            className={`nav-button ${isHoverable ? 'nav-elem-hover' : ''}`}
            onClick={onClick}
        >
            <div className="flex h-[40px] min-w-[60px] items-center justify-center">
                <div className="absolute flex min-w-[60px] justify-center text-[--text-color]">
                    {left}
                </div>
            </div>
            <span className="mx-2 overflow-hidden text-[--text-color]">
                {right}
            </span>
        </NavLink>
    )
}

export default SidebarButton

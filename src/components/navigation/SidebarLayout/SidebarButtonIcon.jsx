import React from 'react'

const SidebarButtonIcon = ({ icon }) => {
    return (
        <div className="flex h-[40px] min-w-[60px] items-center justify-center">
            <div className="absolute flex min-w-[60px] justify-center text-[--text-color]">
                {icon}
            </div>
        </div>
    )
}

export default SidebarButtonIcon

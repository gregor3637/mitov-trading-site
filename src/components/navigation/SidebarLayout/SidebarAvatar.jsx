import React from 'react'

const SidebarAvatar = () => {
    return (
        <div className={`nav-elem border-b-2 border-[--edge]`}>
            <div className="flex h-[40px] min-w-[60px] items-center justify-center">
                <div className="absolute flex h-[50px] w-[50px] items-center justify-center rounded-xl  text-[--text-color]">
                    <img src="./avatar.png" alt="" className="w-full" />
                </div>
            </div>
            <div className="mx-2 ml-2 flex flex-col overflow-hidden text-xl leading-tight text-[--text-color]">
                <span>John</span>
                <span>Smith Jr.</span>
            </div>
        </div>
    )
}

export default SidebarAvatar

import React from 'react'
import { NavLink } from 'react-router-dom'
import SidebarButtonLabel from './SidebarButtonLabel'
import SidebarButtonIcon from './SidebarButtonIcon'
import SidebarAvatar from './SidebarAvatar'

const curry = (Wrapper, isHoverable = false) => {
    return ({ children, className, ...rest }) => {
        return (
            <Wrapper
                className={`nav-button ${isHoverable ? 'nav-elem-hover' : ''} ${className ? className : ''}`}
                {...rest}
            >
                {children}
            </Wrapper>
        )
    }
}

const Div = curry('div')
const Button = curry('button')
const Link = curry(NavLink, true)

const SidebarLayout = ({ isOpen, avatar, topButtons, bottomButtons }) => {
    return (
        <div
            className={`
        absolute z-[100] h-full
        sm:static sm:w-[250px]
        ${isOpen ? '' : 'sm:!w-[100px]'}
  `}
        >
            <div
                className={`
            fixed flex h-[calc(100vh-40px)] w-[250px] flex-col justify-between whitespace-nowrap border-r-2  border-[--edge]
            bg-[--sidebar-color]  p-4  sm:h-full
            ${isOpen ? '' : '-translate-x-full sm:!w-[100px] sm:translate-x-0'}
        `}
            >
                <div className="flex h-full flex-col justify-between">
                    {avatar}
                    <div className="mt-4 flex h-full flex-col justify-between">
                        <div>{topButtons}</div>
                        <div className="flex flex-col gap-2">
                            {bottomButtons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SidebarLayout.Div = Div
SidebarLayout.Button = Button
SidebarLayout.Link = Link

SidebarLayout.Avatar = SidebarAvatar
SidebarLayout.ButtonIcon = SidebarButtonIcon
SidebarLayout.ButtonLabel = SidebarButtonLabel

export default SidebarLayout

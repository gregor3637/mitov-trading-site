import React from 'react'
import PanelButton from './PanelButton'

const Panel = ({ children, className, title, button }) => {
    return (
        <div
            className={`${className} overflow-hidden rounded-xl border-2 border-[--panel-border] bg-gradient-to-r from-[--investments-bg-from] to-[--investments-bg-to]
            `}
        >
            <div className=" mb-2 flex items-center justify-between border-b-2 border-[--edge] px-10 py-2">
                <h1
                    className=" text-center text-3xl font-bold text-[--text-color] 
                 xl:text-start"
                >
                    {title}
                </h1>
                {button}
            </div>
            <div
                className="m-4 flex flex-col gap-2 lg:flex-row lg:gap-4
                xl:gap-10"
            >
                {children}
            </div>
        </div>
    )
}

Panel.Button = PanelButton

export default Panel

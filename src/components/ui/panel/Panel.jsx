import React from 'react'
import PanelButton from './PanelButton'

const Panel = ({ children, className, title, button }) => {
    return (
        <div
            className={`${className} overflow-hidden rounded-xl border-2 border-[--panel-border] bg-gradient-to-r from-[--investments-bg-from] to-[--investments-bg-to]
            `}
        >
            <div
                className={`mb-2 flex items-center ${button ? 'justify-between' : 'justify-center'} gap-10 border-b-2 border-[--edge] px-2 py-2 
                sm:gap-4 sm:px-10`}
            >
                <h1
                    className=" text:xl text-center font-bold text-[--text-color] 
                    sm:text-3xl 
                 xl:text-start"
                >
                    {title}
                </h1>
                {button}
            </div>
            <div
                className="m-4 flex flex-col gap-2 
                lg:flex-row lg:gap-4
                xl:gap-10"
            >
                {children}
            </div>
        </div>
    )
}

Panel.Button = PanelButton

export default Panel

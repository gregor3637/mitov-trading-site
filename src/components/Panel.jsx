import React from 'react'

const Panel = ({ children, className, title }) => {
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
                <button
                    className="flex items-center gap-2 rounded-[--primary-button-round] border-2 border-dashed border-[--primary-button-borderColor] bg-[--primary-button-color] px-4 py-2 text-[--primary-button-textColor]
                    hover:bg-blue-400 hover:border-transparent
                    md:px-2"
                >
                    <span className="leading-1 text-3xl ">+</span>{' '}
                    <span className="hidden md:block ">New</span>{' '}
                    <span className="hidden lg:block">Investment</span>
                </button>
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

export default Panel

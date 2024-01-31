import React from 'react'

const Pangel = ({ children, className, title }) => {
    return (
        <div
            className={`${className} rounded-xl border-2 border-[--panel-border] bg-gradient-to-r from-[--investments-bg-from] to-[--investments-bg-to] p-4 
            `}
        >
            <h1
                className="pb-4 text-center text-3xl font-bold text-[--text-color]
                 xl:text-start"
            >
                {title}
            </h1>
            <div
                className="flex flex-col gap-2 lg:flex-row lg:gap-4 
                xl:gap-10"
            >
                {children}
            </div>
        </div>
    )
}

export default Pangel

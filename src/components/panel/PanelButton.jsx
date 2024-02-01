import React from 'react'

const PanelButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 rounded-[--primary-button-round] border-2 border-dashed border-[--primary-button-borderColor] bg-[--primary-button-color] px-4 py-2 text-[--primary-button-textColor]
                    hover:border-transparent hover:bg-blue-400
                    md:px-2"
        >
            <span className="leading-1 text-3xl ">+</span>{' '}
            <span className="hidden md:block ">New</span>{' '}
            <span className="hidden lg:block">Investment</span>
        </button>
    )
}

export default PanelButton

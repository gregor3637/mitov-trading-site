import React from 'react'

const Backdrop = ({ onClose }) => {
    return (
        <div
            onClick={onClose}
            className="fixed left-0 top-0 z-[290] h-screen w-full bg-black bg-opacity-75"
        />
    )
}

export default Backdrop

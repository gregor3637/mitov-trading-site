import React from 'react'

const CardStatus = ({ status = 'active' }) => {
    const isActive = status.toLowerCase() === 'active'

    return (
        <>
            <div
                className={`absolute right-0 flex w-1/2 translate-x-[10px] justify-center ${isActive ? 'bg-white' : 'bg-gray-700'} py-1`}
            >
                <span
                    className={`text-3xl font-extrabold capitalize  ${isActive ? '' : 'text-white'}`}
                >
                    {status}
                </span>
            </div>
            <div
                className={`ribbon ${status ? 'bg-white' : 'bg-gray-900'}`}
            ></div>
        </>
    )
}

export default CardStatus

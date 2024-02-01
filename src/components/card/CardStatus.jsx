import React from 'react'

const CardStatus = ({status = "Open"}) => {
    return (
        <>
            <div
                className={`absolute right-0 flex w-1/2 translate-x-[10px] justify-center ${status ? 'bg-white' : 'bg-gray-700'} py-1`}
            >
                <span
                    className={`text-3xl font-extrabold capitalize  ${status ? '' : 'text-white'}`}
                >
                    {status ? 'Open' : 'Closed'}
                </span>
            </div>
            <div
                className={`ribbon ${status ? 'bg-white' : 'bg-gray-900'}`}
            ></div>
        </>
    )
}

export default CardStatus

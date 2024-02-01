import React from 'react'

export const OPTION_NOT_PICKED_VALUE = 'undecided'

export const OPTIONS = {
    cash: {
        icon: './investment/cash.png',
        backgroundClass: 'bg-gray-900',
    },
    crypto: {
        icon: './investment/bitcoin.png',
        backgroundClass: 'bg-red-600',
    },
    stocks: {
        icon: './investment/stocks.png',
        backgroundClass: 'bg-green-900',
    },
    gold: {
        icon: './investment/gold.png',
        backgroundClass: 'bg-yellow-600',
    },
    property: {
        icon: './investment/property.png',
        backgroundClass: 'bg-blue-700',
    },
    land: {
        icon: './investment/land.png',
        backgroundClass: 'bg-amber-900',
    },
    [OPTION_NOT_PICKED_VALUE]: {
        icon: './investment/undecided.png',
        backgroundClass: 'bg-transparent',
    },
}

const CardIcon = ({ type }) => {
    type = type || OPTION_NOT_PICKED_VALUE;
    return (
        <div
            className={`flex h-12 w-12 items-center justify-center rounded-md ${OPTIONS[type.toLowerCase()].backgroundClass}`}
        >
            <img
                src={OPTIONS[type.toLowerCase()].icon}
                alt=""
                className={`w-[80%] brightness-0 invert`}
            />
        </div>
    )
}

export default CardIcon

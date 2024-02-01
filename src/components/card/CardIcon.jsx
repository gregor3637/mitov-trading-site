import React from 'react'

const options = {
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
    undecided: {
        icon: './investment/undecided.png',
        backgroundClass: 'bg-transparent',
    },
}

const CardIcon = ({ type }) => {
    return (
        <div
            className={`flex h-12 w-12 items-center justify-center rounded-md ${options[type.toLowerCase()].backgroundClass}`}
        >
            <img
                // src={options['land'].icon}
                src={options[type.toLowerCase()].icon}
                alt=""
                className={`w-[80%] brightness-0 invert`}
            />
        </div>
    )
}

export default CardIcon

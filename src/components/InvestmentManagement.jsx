import React from 'react'
import Card from './Card'

const investmentsData = {
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
}

const InvestmentManagement = ({ investments }) => {
    return (
        <section className="grid-pannel w-full pb-10">
            {investments.map((elData, idx) => {
                return (
                    <Card
                        key={idx}
                        isActive={elData.status === 'active'}
                        name={elData.name}
                        date={elData.date}
                        image={
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-md ${investmentsData[elData.type.toLowerCase()].backgroundClass}`}
                            >
                                <img
                                    src={
                                        investmentsData[
                                            elData.type.toLowerCase()
                                        ].icon
                                    }
                                    alt=""
                                    className={`w-[80%] brightness-0 invert`}
                                />
                            </div>
                        }
                        value={elData.value}
                    />
                )
            })}
        </section>
    )
}

export default InvestmentManagement


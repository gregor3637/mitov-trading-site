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

const ServiceSection = () => {
    return (
        <section className="scroll-py-16 bg-gradient-to-r from-[--investments-bg-from] to-[--investments-bg-to] pb-[300px]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-white">
                        Our servives
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">
                        We offer a variaety of services
                    </p>
                </div>
                <div className="grid-cols-cols grid gap-10 lg:mt-12">
                    <Card
                        // isActive
                        name="First Gold Investment"
                        date="02/03/2023"
                        image={
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-md ${false ? 'bg-red-600' : 'bg-gray-200'}`}
                            >
                                <img
                                    src="./investment/stocks.png"
                                    // src={value.icon}
                                    alt=""
                                    className={`w-[80%] brightness-0  ${false ? 'invert' : ''}`}
                                />
                            </div>
                        }
                        value="13,332,123"
                    />
                    {Object.entries(investmentsData).map(
                        ([key, value], idx) => {
                            return (
                                <Card
                                    key={idx}
                                    isActive
                                    name="First Gold Investment"
                                    date="02/03/2023"
                                    image={
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-md ${value.backgroundClass}`}
                                        >
                                            <img
                                                // src="./investment/stocks.png"
                                                src={value.icon}
                                                alt=""
                                                className={`w-[80%] brightness-0  ${true ? 'invert' : ''}`}
                                            />
                                        </div>
                                    }
                                    value="13,332,123"
                                />
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection

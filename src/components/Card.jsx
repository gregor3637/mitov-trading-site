import React from 'react'
import { compressBigNumbers } from '../utils/portfolio'

const mouseHandle = (event) => {
    const planetBackground = event.currentTarget
    const { left, top, width, height } =
        planetBackground.getBoundingClientRect()
    const { clientX, clientY } = event
    const mouseX = (clientX - left) / width
    const mouseY = (clientY - top) / height

    const backgroundPosX = mouseX * 50
    const backgroundPosY = mouseY * 50

    planetBackground.style.backgroundPosition = `${backgroundPosX}% ${backgroundPosY}%`
}

const Card = ({ name, date, image, value, isActive }) => {
    return (
        <div
            className={`${isActive ? 'investment-card-active cursor-pointer' : 'investment-card-closed'} relative flex min-h-[240px] w-[300px] min-w-[200px]  max-w-[600px] flex-col justify-between rounded-lg p-3 shadow-sm
            sm:w-[300px]
            md:w-[400px]
            `}
            onMouseMove={isActive ? mouseHandle : null}
        >
            <div
                className={`absolute right-0 flex w-1/2 translate-x-[10px] justify-center ${isActive ? 'bg-white' : 'bg-gray-700'} py-1`}
            >
                <span
                    className={`text-3xl font-extrabold capitalize  ${isActive ? '' : 'text-white'}`}
                >
                    {isActive ? 'Open' : 'Closed'}
                </span>
            </div>
            <div
                className={`ribbon ${isActive ? 'bg-white' : 'bg-gray-900'}`}
            ></div>
            {image}
            <div>
                <h4
                    className="text-center text-5xl font-medium text-gray-900
                    sm:text-start"
                >
                    ${compressBigNumbers(value)}
                </h4>
            </div>
            <div
                className="flex flex-col items-center justify-between gap-2 overflow-hidden text-center
                 sm:flex-row sm:items-end sm:gap-6 sm:text-left"
            >
                <h5
                    className="text-xl font-medium text-gray-900 
                    sm:truncate sm:text-2xl"
                >
                    {name}
                </h5>
                <p
                    className={`text-sm font-medium ${isActive ? 'text-gray-300' : 'text-gray-800'}`}
                >
                    {date}
                </p>
            </div>
        </div>
    )
}

export default Card

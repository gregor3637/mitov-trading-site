import React from 'react'

const Card = ({ name, date, image, value, isActive }) => {
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

    return (
        <div
            className={`${isActive ? 'investment-card-active' : 'investment-card-closed'} relative flex min-h-[240px] min-w-[300px] max-w-[420px] cursor-pointer flex-col justify-between rounded-lg p-3 shadow-sm`}
            onMouseMove={isActive ? mouseHandle : null}
        >
            <div className={`absolute right-0 flex w-1/2 translate-x-[10px] justify-center ${isActive ? 'bg-white' : 'bg-gray-700'} py-1`}>
                <span className={`text-3xl font-extrabold capitalize  ${isActive ? '' : 'text-white' }`}>
                    {isActive ? 'Open' : 'Closed'}
                </span>
            </div>
            <div class={`ribbon ${isActive ? 'bg-white' : "bg-gray-900"}`}></div>
            {image}
            <div>
                <h4 className="text-5xl font-medium text-gray-900">${value}</h4>
            </div>
            <div className="flex items-end justify-between">
                <h5 className=" text-2xl  font-medium leading-none text-gray-900">
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

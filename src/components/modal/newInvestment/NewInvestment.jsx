import React, { useState } from 'react'
import Card from '../../card/Card'
import { OPTION_NOT_PICKED_VALUE, OPTIONS } from '../../card/CardIcon'

const NewInvestment = ({ onClose, investmentData }) => {
    console.log('🚀 ~ NewInvestment ~ investmentData:', investmentData)
    const [name, setName] = useState('value')
    const [value, setValue] = useState(0)
    const [type, setType] = useState(OPTION_NOT_PICKED_VALUE)

    const handleNameChange = (ev) => setName(ev.target.value)
    const handleTypeChange = (ev) => setType(ev.target.value)
    const handleValueChange = (ev) => setValue(ev.target.value)

    return (
        <div className="fixed right-0 top-20 z-50 h-[80vh] w-1/2 -translate-x-1/2 transform items-center justify-center rounded-lg bg-[--body-color]  p-4 ">
            <div className="flex h-full flex-col items-center justify-center rounded-[--primary-button-round] border-2 border-[--edge] bg-yellow-300 p-10">
                <div className=".content flex h-full w-full flex-col items-center justify-between bg-red-300">
                    <div className="card-and-title mt-4 flex flex-col items-center gap-5 bg-blue-700">
                        <h1 className="text-3xl font-semibold">
                            Open New Investment Position
                        </h1>
                        <Card
                            isActive={investmentData.status === 'active'}
                            name={name}
                            date={investmentData.date}
                            icon={<Card.Icon type={type} />}
                            value={value}
                        />
                    </div>
                    <div className="h-full w-full bg-green-400 p-4">
                        <div className="mx-auto flex max-w-max flex-col items-center justify-center gap-5  px-10 *:rounded-lg *:p-4">
                            <input
                                name="name"
                                type="text"
                                placeholder="name"
                                onChange={handleNameChange}
                            />
                            <select
                                name="type"
                                onChange={handleTypeChange}
                                placeholder="undecided"
                                className="px w-full"
                            >
                                <option value="" disabled selected hidden>
                                    Type
                                </option>
                                {Object.keys(OPTIONS)
                                    .filter(
                                        (x) => x !== OPTION_NOT_PICKED_VALUE
                                    )
                                    .map((option) => (
                                        <option key={option} value={option}>
                                            {option.charAt(0).toUpperCase() +
                                                option.slice(1)}
                                        </option>
                                    ))}
                            </select>
                            <input
                                name="value"
                                type="number"
                                placeholder="value"
                                className="remove-arrow appearance-none"
                                onChange={handleValueChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-10">
                    <button className="primary-button">Open</button>
                    <button className="secondary-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewInvestment

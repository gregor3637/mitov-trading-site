import React, { useState } from 'react'
import Card from '../../card/Card'
import { OPTION_NOT_PICKED_VALUE, OPTIONS } from '../../card/CardIcon'
import { formatDate } from '../../../utils/date'
import { addInvestment } from '../../../api'
import { useNavigate } from 'react-router-dom'

const NewInvestment = ({ onClose }) => {
    const [name, setName] = useState('value')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('')
    const [didCreate, setDidCreate] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    const date = formatDate(new Date())

    const handleNameChange = (ev) => setName(ev.target.value)
    const handleTypeChange = (ev) => setType(ev.target.value)
    const handleValueChange = (ev) => setValue(ev.target.value)

    const handleOpenNewInvestment = async () => {
        if (![name, value, type].every(Boolean)) {
            return
        }

        setLoading(true)
        try {
            const response = await addInvestment({
                name,
                value,
                type,
                date,
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            setDidCreate(true)
            navigate('/')
        } catch (error) {
            // console.log('🚀 ~ handleOpenNewInvestment ~ error:', error)
            return error
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed right-0 top-20 z-50 h-[80vh] w-1/2 -translate-x-1/2 transform items-center justify-center rounded-lg bg-[--body-color]  p-4 ">
            <div className="flex h-full flex-col items-center justify-center rounded-[--primary-button-round] border-2 border-[--edge] bg-yellow-300 p-10">
                <div className=".content flex h-full w-full flex-col items-center justify-between bg-red-300">
                    <div className="card-and-title mt-4 flex flex-col items-center gap-5 bg-blue-700">
                        <h1 className="text-3xl font-semibold">
                            Open New Investment Position
                        </h1>
                        <Card
                            name={name}
                            date={date}
                            icon={<Card.Icon type={type} />}
                            value={value}
                        />
                    </div>

                    <div className="h-full w-full bg-green-400 p-4">
                        <div className="mx-auto flex h-full max-w-max flex-col items-center justify-center gap-5  px-10 *:rounded-lg *:p-4">
                            {didCreate ? (
                                <h1>Successful Creation</h1>
                            ) : (
                                <>
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
                                        value=""
                                    >
                                        <option value="" disabled hidden>
                                            Type
                                        </option>
                                        {Object.keys(OPTIONS)
                                            .filter(
                                                (x) =>
                                                    x !==
                                                    OPTION_NOT_PICKED_VALUE
                                            )
                                            .map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option
                                                        .charAt(0)
                                                        .toUpperCase() +
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex gap-10">
                    {!isLoading && !didCreate && (
                        <>
                            <button
                                className="primary-button"
                                onClick={handleOpenNewInvestment}
                            >
                                Open
                            </button>
                            <button
                                className="secondary-button"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </>
                    )}
                    {isLoading && <div>Loading .... </div>}
                    {!isLoading && didCreate && (
                        <button className="secondary-button" onClick={onClose}>
                            Close
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewInvestment

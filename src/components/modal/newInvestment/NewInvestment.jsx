import React, { useState } from 'react'
import Card from '../../card/Card'
import { OPTION_NOT_PICKED_VALUE, OPTIONS } from '../../card/CardIcon'
import { formatDate } from '../../../utils/date'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../ui/PageButton'
import { addInvestment } from '../../../services/server/api'

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

    const isDisabled = ![name, value, type].every(Boolean)

    const handleOpenNewInvestment = async () => {
        if (isDisabled) {
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
        <div
            className="fixed left-1/2 top-1/2 z-[300] h-[600px] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg  bg-[--body-color] p-4 
            sm:h-[60vh] sm:w-[80%]
            xl:h-[80vh]  xl:w-[1000px]
           "
        >
            <div
                className="flex h-full flex-col items-center justify-center rounded-[--primary-button-round] border-2 border-[--edge]  p-2 
            md:p-10"
            >
                <div className="flex h-full w-full flex-col items-center justify-between">
                    <div className="mt-4 flex flex-col items-center gap-5 ">
                        <h1 className="!text-center text-2xl font-semibold text-[--text-color] sm:text-3xl">
                            Open New Investment Position
                        </h1>
                        <Card
                            name={name}
                            date={date}
                            icon={<Card.Icon type={type} />}
                            value={value}
                        />
                    </div>

                    <div className="h-full w-full  p-4">
                        <div
                            className="mx-auto flex h-full max-w-max flex-col items-center justify-center gap-5  *:rounded-lg  *:p-1 
                        sm:*:p-4 
                        lg:px-10 lg:*:px-10"
                        >
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
                                        className=" w-full"
                                        value={type}
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
                            <PrimaryButton
                                disabled={isDisabled}
                                label="Open"
                                onClick={handleOpenNewInvestment}
                            />
                            <PrimaryButton
                                label="Close"
                                onClick={onClose}
                                isPrimary={false}
                            />
                        </>
                    )}
                    {isLoading && <div>Loading .... </div>}
                    {!isLoading && didCreate && (
                        <PrimaryButton label="Close" onClick={onClose} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewInvestment

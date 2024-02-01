import React, { useState } from 'react'
import Card from '../../card/Card'
import { setNewInvestment } from '../../../api'
import { useNavigate } from 'react-router-dom'

const CloseInvestment = ({ onClose, closingInvestmentData }) => {
    console.log("🚀 ~ CloseInvestment ~ closingInvestmentData:", closingInvestmentData)
    const { type, status, ...rest } = closingInvestmentData
    const [didCreate, setDidCreate] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleOpenNewInvestment = async () => {
        // if (![name, value, type].every(Boolean)) {
        //     return
        // }
        // setLoading(true)
        // try {
        //     const response = await setNewInvestment({
        //         name,
        //         value,
        //         type,
        //         date,
        //     })
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok')
        //     }
        //     setDidCreate(true)
        //     navigate('/')
        // } catch (error) {
        //     return error
        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <div className="fixed right-0 top-20 z-50 h-[80vh] w-1/2 -translate-x-1/2 transform items-center justify-center rounded-lg bg-[--body-color]  p-4 ">
            <div className="flex h-full flex-col items-center justify-center rounded-[--primary-button-round] border-2 border-[--edge] bg-yellow-300 p-10">
                <div className=".content flex h-full w-full flex-col items-center justify-between bg-red-300">
                    <div className="card-and-title mt-4 flex h-full flex-col items-center gap-5 bg-blue-700 ">
                        <h1 className="pb-20 text-3xl font-semibold">
                            Closing Investment:
                        </h1>
                        <Card
                            icon={<Card.Icon type={type} />}
                            status={<Card.Status />}
                            {...rest}
                        />
                    </div>
                </div>
                <div className="flex gap-10">
                    {!isLoading && !didCreate && (
                        <>
                            <button
                                className="primary-button"
                                onClick={handleOpenNewInvestment}
                            >
                                Close Investment
                            </button>
                            <button
                                className="secondary-button"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </>
                    )}
                    {isLoading && <div>Loading .... </div>}
                    {!isLoading && didCreate && (
                        <button className="secondary-button" onClick={onClose}>
                            Investment Closed
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CloseInvestment

import React, { useState } from 'react'
import Card from '../../card/Card'
import { closeInvestment } from '../../../api'
import { useNavigate } from 'react-router-dom'

const CloseInvestment = ({ onClose, invData }) => {
    const [isSuccessfulClose, setIsSuccessfulClose] = useState(false)
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleClosingInvestment = async () => {
        setLoading(true)
        setError('')
        try {
            const response = await closeInvestment({
                id: invData.id,
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            setIsSuccessfulClose(true)
            navigate('/')
        } catch (error) {
            setError(error)
            return error
        } finally {
            setLoading(false)
        }
    }

    const showCard = invData && !error && !isSuccessfulClose

    return (
        <div className="fixed right-0 top-20 z-50 h-[80vh] w-1/2 -translate-x-1/2 transform items-center justify-center rounded-lg bg-[--body-color]  p-4 ">
            <div className="flex h-full flex-col items-center justify-center rounded-[--primary-button-round] border-2 border-[--edge] bg-yellow-300 p-10">
                <div className=".content flex h-full w-full flex-col items-center justify-between bg-red-300">
                    <div className="card-and-title mt-4 flex h-full flex-col items-center gap-5 bg-blue-700 ">
                        <h1 className="pb-20 text-3xl font-semibold">
                            Closing Investment:
                        </h1>
                        {showCard && (
                            <Card
                                icon={<Card.Icon type={invData.type} />}
                                status={<Card.Status status={invData.status} />}
                                name={invData.name}
                                date={invData.date}
                                value={invData.value}
                            />
                        )}
                        {isLoading && <h1>Loading .... </h1>}
                        {isSuccessfulClose && (
                            <h1>Investment Successfully Closed</h1>
                        )}
                    </div>
                </div>
                <div className="flex gap-10">
                    {!isLoading && !isSuccessfulClose && (
                        <>
                            <button
                                className="primary-button"
                                onClick={handleClosingInvestment}
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

                    {!isLoading && isSuccessfulClose && (
                        <button className="secondary-button" onClick={onClose}>
                            Back To Investment Management
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CloseInvestment

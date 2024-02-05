import React, { useState } from 'react'
import Card from '../../card/Card'
import { useNavigate } from 'react-router-dom'
import PageButton from '../../ui/PageButton'
import { closeInvestment } from '../../../services/server/api'

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

    const showCard = invData && !isLoading && !error && !isSuccessfulClose

    return (
        <div
            className="fixed left-1/2 top-1/2 z-[300] h-[600px] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg  bg-[--body-color]  p-4 
            sm:h-[60vh] sm:w-[80%]
            xl:h-[80vh]  xl:w-[1000px]
           "
        >
            <div
                className="flex h-full flex-col items-center justify-between rounded-[--primary-button-round] border-2 border-[--edge]  p-2
             sm:p-10 "
            >
                <div className="flex h-full w-full flex-col items-center justify-between ">
                    <div className="card-and-title mt-4 flex h-full flex-col items-center gap-2 ">
                        <h1 className="min-h-min text-center text-3xl font-semibold text-[--text-color]">
                            Closing Investment:
                        </h1>
                        <div className="flex h-full items-center justify-center ">
                            {showCard && (
                                <Card
                                    icon={<Card.Icon type={invData.type} />}
                                    status={
                                        <Card.Status status={invData.status} />
                                    }
                                    name={invData.name}
                                    date={invData.date}
                                    value={invData.value}
                                />
                            )}
                            {isLoading && <h1 className='text-[--text-color]'>Loading .... </h1>}
                            {isSuccessfulClose && (
                                <h1 className="text-center text-3xl text-[--text-color]">
                                    Investment Successfully Closed
                                </h1>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 sm:gap-10">
                    {!isLoading && !isSuccessfulClose && (
                        <>
                            <PageButton
                                label={'Close Investment'}
                                onClick={handleClosingInvestment}
                            />
                            <PageButton label={'Cancel'} onClick={onClose} isPrimary={false} />
                        </>
                    )}

                    {!isLoading && isSuccessfulClose && (
                        <PageButton
                            label={'Back To Investment Management'}
                            onClick={onClose}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CloseInvestment

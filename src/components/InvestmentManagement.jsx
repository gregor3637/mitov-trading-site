import React from 'react'
import Card from './card/Card'
import { useDispatch } from 'react-redux'
import { setClosingInvestment } from '../services/store/reducers/modalSlice'

const InvestmentManagement = ({ investments, onCloseExistingInvestment }) => {
    const dispatch = useDispatch()

    const handleCardClick = (currInvestment) => {
        onCloseExistingInvestment(currInvestment)
        dispatch(setClosingInvestment(currInvestment))
    }

    return (
        <section className="grid-pannel w-full pb-10">
            {investments.map((invData, idx) => {
                return (
                    <Card
                        key={idx}
                        isActive={invData.status === 'active'}
                        status={<Card.Status status={invData.status} />}
                        name={invData.name}
                        date={invData.date}
                        icon={<Card.Icon type={invData.type.toLowerCase()} />}
                        value={invData.value}
                        onClick={() => handleCardClick(invData)}
                    />
                )
            })}
        </section>
    )
}

export default InvestmentManagement

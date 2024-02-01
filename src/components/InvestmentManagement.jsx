import React from 'react'
import Card from './card/Card'

const InvestmentManagement = ({ investments }) => {
    const handleCardOpen = () => {}
    
    return (
        <section className="grid-pannel w-full pb-10">
            {investments.map((elData, idx) => {
                return (
                    <Card
                        key={idx}
                        isActive={elData.status === 'active'}
                        status={
                            <Card.Status isActive={elData.status === 'active'} />
                        }
                        name={elData.name}
                        date={elData.date}
                        icon={<Card.Icon type={elData.type.toLowerCase()} />}
                        value={elData.value}
                        onClick={handleCardOpen}
                    />
                )
            })}
        </section>
    )
}

export default InvestmentManagement

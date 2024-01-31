import React from 'react'
import { compressBigNumbers } from '../utils/portfolio'

const InvestedValue = ({ investments }) => {
    const totalValue = investments
        .filter((x) => x.status !== 'closed' && x.type.toLowerCase() !== 'cash')
        .reduce((acc, curr) => parseInt(curr.value) + acc, 0)

    return (
        <p className="px-2 md:p-4 text-4xl lg:text-5xl font-black">
            ${compressBigNumbers(totalValue)}
        </p>
    )
}

export default InvestedValue

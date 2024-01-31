import React from 'react'

const InvestmentsStatus = ({ investments }) => {
    const statusCountMap = investments.reduce((acc, { status }) => {
        acc.set(status, (acc.get(status) || 0) + 1)
        return acc
    }, new Map())

    return (
        <div className="flex flex-col gap-2 text-3xl font-medium">
            {[...statusCountMap].map(([status, count]) => (
                <p
                    key={status}
                    className="flex justify-between rounded-lg bg-[--widget-investment-status] px-4 gap-4"
                >
                    <span className="capitalize">{status}:</span>
                    <span>{count}</span>
                </p>
            ))}
        </div>
    )
}

export default InvestmentsStatus

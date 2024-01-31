export const allocationByCategoryReducer = (acc, investment) => {
    if (acc[investment.type]) {
        acc[investment.type] += parseInt(investment.value)
    } else {
        acc[investment.type] = parseInt(investment.value)
    }
    return acc
}

export const compressBigNumbers = (value) => {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        notation: 'compact',
        compactDisplay: 'short',
    }).format(value)
}

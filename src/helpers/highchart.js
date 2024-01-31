import { allocationByCategoryReducer } from '../utils/portfolio'

export const convertInvestmentToDataEntry = (investments, colors) => {
    return Object.entries(
        investments
            .filter((x) => x.status === 'active')
            .reduce(allocationByCategoryReducer, {})
    ).map(([investmentType, totamSum], idx) => ({
        name: investmentType,
        y: parseFloat(totamSum),
        color: colors[idx % colors.length],
    }))
}




import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import PieChart from '../components/highcharts/PieChart'
import InvestedValue from '../components/InvestedValue'
import Widget from '../components/Widget'
import InvestmentsStatus from '../components/InvestmentsStatus'
import InvestmentManagement from '../components/InvestmentManagement'
import Panel from '../components/Panel'
import { getInvestments } from '../api'
import NewInvestmentModal from '../components/modal/NewInvestment/NewInvestmentModal'

export async function loader() {
    const investments = await getInvestments()
    return investments
}

const Investments = () => {
    const investments = useLoaderData()
    const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false)

    const handleCloseModal = () => setIsInvestmentModalOpen(false)

    return (
        <>
            {isInvestmentModalOpen && <NewInvestmentModal onClose={handleCloseModal}  data={investments[0]}/>}
            <div className="bg-[--sidebar-color] px-10 pb-10">
                <h1 className="py-10">
                    <span className="text-5xl font-extrabold text-[--text-color]">
                        Ivestments
                    </span>
                </h1>
                <Panel title="Overview">
                    <div
                        className="widget-container-numbers flex flex-1 flex-col gap-4 
                    sm:justify-between md:flex-row 
                    lg:max-w-[600px] lg:flex-col"
                    >
                        <Widget title="Invested Value:" info="without cash*">
                            <InvestedValue investments={investments} />
                        </Widget>
                        <Widget title="Investments status:">
                            <InvestmentsStatus investments={investments} />
                        </Widget>
                    </div>
                    <div
                        className="widget-container-piechart w-full overflow-hidden rounded-2xl border-2 border-[--widget-border] bg-[--widget-bg] 
                    lg:w-[70%]"
                    >
                        <PieChart investments={investments} />
                    </div>
                </Panel>
                <Panel className="mt-5" title="Investment Management">
                    <InvestmentManagement investments={investments} />
                </Panel>
            </div>
        </>
    )
}

export default Investments

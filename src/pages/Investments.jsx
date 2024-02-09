import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PieChart from '../components/highcharts/PieChart'
import InvestedValue from '../components/InvestedValue'
import Widget from '../components/ui/Widget'
import InvestmentsStatus from '../components/InvestmentsStatus'
import InvestmentManagement from '../components/InvestmentManagement'
import Panel from '../components/ui/panel/Panel'
import {
    setIsNewInvestmentOpen,
    setIsCloseInvestmentOpen,
} from '../services/store/reducers/modalSlice'
import { getDotInvestments, getInvestments } from '../services/server/api'

export async function loader() {
    // const investments = await getInvestments()
    const investments = await getDotInvestments()
    return investments
}

const Investments = () => {
    const investments = useLoaderData()
    const dispatch = useDispatch()
    const handleOpenNewInvestment = () => dispatch(setIsNewInvestmentOpen(true))
    const handleCloseExistingInvestment = () =>
        dispatch(setIsCloseInvestmentOpen(true))

    // // return <div>@@@@@@@@@</div>

    return (
        <>
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
                <Panel
                    className="mt-5"
                    title="Investment Management"
                    button={<Panel.Button onClick={handleOpenNewInvestment} />}
                >
                    <InvestmentManagement
                        investments={investments}
                        onCloseExistingInvestment={
                            handleCloseExistingInvestment
                        }
                    />
                </Panel>
            </div>
        </>
    )
}

export default Investments

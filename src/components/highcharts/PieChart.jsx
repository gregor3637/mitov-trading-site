import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import React from 'react'
import { convertInvestmentToDataEntry } from '../../helpers/highchart'

const colors = ['tomato', 'skyblue', 'lightgreen']

const getPieChartOptions = (investments) => {
    const options = {
        accessibility: { enabled: false },
        chart: {
            backgroundColor: '#bcd0ff',
            polar: true,
            type: 'line',
            animation: false,
        },
        credits: {
            embeded: true,
        },
        title: null,
        tooltip: {
            pointFormat: '{series.name}: <b>${point.y:.1f}</b>',
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                borderWidth: 5,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.2f}%',
                    distance: 20,
                },
                showInLegend: true,
                animation: false,
            },
        },
        series: [
            {
                type: 'pie',
                data: convertInvestmentToDataEntry(investments, colors),
            },
        ],
    }

    return options
}

const PieChart = ({ investments }) => {
    return (
        <div className=" z-[2] ">
            <HighchartsReact
                highcharts={Highcharts}
                options={getPieChartOptions(investments)}
            />
        </div>
    )
}

export default PieChart

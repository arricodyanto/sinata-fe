import React from 'react'
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type TBasicDonutChartProps = {
    data: { x: string; y: number }[]
}

export default function BasicDonutChart(props: TBasicDonutChartProps & Partial<ApexOptions>) {
    const { data } = props
    const options = {
        chart: {
            id: 'basic-donut',
        },
        legend: {
            show: false
        },
        labels: data.map((d) => d.x),
        series: data.map((d) => d.y)
    }
  return (
    <>
        <ReactApexChart options={options} series={options.series} type="donut" width={"100%"} height={330} />
    </>
  )
}

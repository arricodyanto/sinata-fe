import React from 'react'
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type TBasicLineChartProps = {
    data: { x: string; y: number }[];
}

export default function BasicLineChart(props: TBasicLineChartProps & Partial<ApexOptions>) {
    const { data } = props
    const options = {
        chart: {
            id: 'basic-line',
        },
        xaxis: {
            categories: data.map((d) => d.x),
        },
        grid: {
            show: false
        },
    }
    const series = [
        {
            name: 'Series 1',
            data: data.map((d) => d.y),
        },
    ]
  return (
    <>
        <ReactApexChart options={options} series={series} type="line" width={"100%"} height={150} />
    </>
  )
}

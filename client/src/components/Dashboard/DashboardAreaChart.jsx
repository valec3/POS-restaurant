import React, { useState } from "react"
import ReactApexChart from 'react-apexcharts';

class ApexDashboardAreaChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Ganancias',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Perdidas',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
                chart: {
                    height: 200,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        '2018-09-19T00:00:00.000Z',
                        '2018-09-19T01:30:00.000Z',
                        '2018-09-19T02:30:00.000Z',
                        '2018-09-19T03:30:00.000Z',
                        '2018-09-19T04:30:00.000Z',
                        '2018-09-19T05:30:00.000Z',
                        '2018-09-19T06:30:00.000Z'
                    ],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} width={600} />
            </div>
        );
    }
}

const DashboardAreaChart = () => {
    const [data, setData] = useState([])
    const [labels, setLabels] = useState([])

    return (
        <div>
            <ApexDashboardAreaChart />
        </div>
    )
}

export default DashboardAreaChart
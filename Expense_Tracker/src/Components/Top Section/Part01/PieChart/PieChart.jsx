
import React from 'react';
import './PieChart.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Food', 'Entertainment', 'Travel'],
        datasets: [
            {
                label: 'Expenses by Category',
                data: [30, 70, 10],
                backgroundColor: ['#9978c0', '#FFA500', '#FFFF00'], //Purple, Orange, Yellow
                borderColor: ['#9978c0', '#FFA500', '#FFFF00'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white'
                },
            },
        }

    }

    return (
        <div className="pie-chart">
            <h2>Expenses Breakdown</h2>
            <div className="chart-container">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default PieChart;

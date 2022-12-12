import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, Tooltip, YAxis } from 'recharts';

const MyLineChart = () => {

    const [charts, setCharts] = useState([])

    useEffect(() => {
        axios.get('chartData.json')
            // .then(data => setCharts(data));
            .then(data => {
                const loadedDAta = data.data;
                const phoneData = loadedDAta.map(phone => {
                    const parts = phone;
                    const ph = {
                        month: parts.month,
                        investment: parts.investment,
                        sell: parts.sell,
                        revenue: parts.revenue
                    };
                    return ph;
                });
                setCharts(phoneData);
                // console.log(phoneData);
            })
    }, []);


    return (
        <BarChart width={450} height={140} data={charts}>
            <Bar dataKey='month' fill="investment" />
            <XAxis dataKey="sell"></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default MyLineChart;
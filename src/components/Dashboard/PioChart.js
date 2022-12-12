import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const PioChart = () => {

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
        <LineChart width={600} height={300} data={charts}>
            <Line type="month" dataKey="investment" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="sell" />
            <Tooltip></Tooltip>
            <YAxis />
        </LineChart>
    );
};

export default PioChart;
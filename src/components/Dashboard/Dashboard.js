import React from 'react';
import './Dashboard.css';
import MyLineChart from './MyLineChart';
import PioChart from './PioChart';

const Dashboard = () => {
    return (
        <div>
            <MyLineChart></MyLineChart>
            <PioChart></PioChart>
        </div>
    );
};

export default Dashboard;
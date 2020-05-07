import { connect } from 'react-redux';
import React from 'react';

const Navigation = () => (
    <div>
        <h1 className="text-center w-full">Anomaly Detection details</h1>
    </div>
);

export const NavigationBar = connect(state => state)(Navigation);
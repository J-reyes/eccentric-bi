import React, { Component } from 'react';

import WidgetDropdown from './widget-dropdown';
import WidgetDisplay from './widget-display';

const WidgetContainer = props => (
    <div className="main-container">
        <WidgetDropdown />
        <WidgetDisplay />
    </div>
)

export default WidgetContainer;

import React from 'react';
import './Tab.css';

const Tab = props => {
    const onClick = () => {
        props.setSelectedTab(props.label, props.content);
    }
    return (
        <div className="Tab" onClick={onClick} style={{color: props.color, backgroundColor: props.bgColor}}>
            {props.label}
        </div>
    )
}

export default Tab

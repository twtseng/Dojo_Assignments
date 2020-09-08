import React, { useState } from 'react'
import Tab from './Tab'
import './TabBar.css'

const TabBar = props => {
    const initialState =  props.tabs.map(x => {
        return {
            label: x.label,
            content: x.content,
            color: "black",
            bgColor: "gray"
        }});
    const [ tabs, setTabs ] = useState(initialState);
    const setSelectedTab = (label, content) => {
        const updatedTabs = tabs.map(x => {
                if (x.label === label) {
                    x.color = "white";
                    x.bgColor = "black";
                } else {
                    x.color = "black";
                    x.bgColor = "gray";
                }
                return x;
            }
        )
        setTabs(updatedTabs);
        props.setSelectedContent(content);
    }
    return (
        <div className="TabBar">
            { 
                tabs.map(x => {
                    return <Tab setSelectedTab={setSelectedTab} key={x.label} label={x.label} content={x.content} color={x.color} bgColor={x.bgColor} />
                })
            }
        </div>
    )
}

export default TabBar

import React, { useState } from 'react'
import AppContext from '../context/AppContext'

const Wrapper = props => {
    const [my_name, set_my_name] = useState("You");
    return (
        <AppContext.Provider value={{my_name, set_my_name}}>
        {props.children}
        </AppContext.Provider>
    )
}

export default Wrapper

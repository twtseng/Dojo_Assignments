import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const Form = () => {
    const { my_name, set_my_name } = useContext(AppContext);
    return (
        <div>
            <label htmlFor="your_name">Your name:</label>
            <input 
            id="your_name" 
            name="your_name" 
            type="text" 
            value={my_name} 
            onChange={e => set_my_name(e.target.value)}
            />
        </div>
    )
}

export default Form

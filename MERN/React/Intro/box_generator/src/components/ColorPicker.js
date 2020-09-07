import React, { useState } from 'react'


const ColorPicker = props => {
    const [color, setColor] = useState("")
    const onSubmitColor = e => {
        props.submitColor(color);
    }
    return (
        <div>
            <label >Color</label>
            <input type="text" name="color" id="color" onChange={e => setColor(e.target.value)}></input>
            <button onClick={onSubmitColor}>Add</button>
        </div>
    )
}

export default ColorPicker

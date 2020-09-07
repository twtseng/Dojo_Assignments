import React from 'react';
import styles from './ColorBlock.module.css';


const ColorBlock = props => {
    return (
        <div className={styles.colorblock} style={{backgroundColor: props.color}}>
        </div>
    )
}

export default ColorBlock

import React, { Component } from "react";
import styles from './Main.module.css';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

class Main extends Component {
    render() {
        return (
        <div className={styles.main}>
            <div className={styles.maininner}>
                <div className={styles.subcontentrow}>
                    <Subcontent />
                    <Subcontent />
                    <Subcontent />
                </div>
                <Advertisement />
            </div>
        </div>
        );
    }
}
export default Main;
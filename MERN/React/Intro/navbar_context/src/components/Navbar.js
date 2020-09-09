import React from 'react'
import './Navbar.css'
import AppContext from '../context/AppContext'

const Navbar = () => {
    const { my_name } = React.useContext(AppContext);
    return (
        <div className="navbar">
            {my_name}
        </div>
    )
}

export default Navbar

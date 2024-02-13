import React, { useState } from 'react'
import useDarkSide from '../hooks/useDarkSide';
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeButton = ({ size }) => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    }

    return (
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={size} />
    )
}

export default DarkModeButton
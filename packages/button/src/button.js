import React from 'react';
// 
const Btn = (params) => {
    const {  
        backgroundColor, 
        size='medium', 
        label, 
        ...props
    } = params
    return (
    <button
        type="button"
        style={backgroundColor && { backgroundColor }}
        {...props}
    >
        {label}
    </button>
    )
}

export default Btn

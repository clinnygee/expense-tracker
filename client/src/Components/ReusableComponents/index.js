import React from 'react';

const Input = (props) => {

    const handleChange = (e) => {
        props.onChange(e)
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.placeholder)
    }
    return (
        <input onChange={handleChange} {...props}/>
    )
}

export {Input};
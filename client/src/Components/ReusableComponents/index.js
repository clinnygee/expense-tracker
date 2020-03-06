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
};

const LoadingSymbol = (props) => {

    const containerStyle = {
        position: 'relative',
        left: '50%',
        top: '50',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '100px',
    };

    const loadingStyle = {

    }
    return (
        <div style={containerStyle}>
            <div class="lds-dual-ring">

            </div>

        </div>
    )
}

export {Input, LoadingSymbol};
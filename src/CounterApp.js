//import React, { Fragment } from 'react'
import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = (e) => setCounter( counter + 1 )

    const handleSubstract = (e) => setCounter( counter - 1 )

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ () => setCounter(0) }>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp
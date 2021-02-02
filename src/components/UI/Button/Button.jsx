import React from 'react'

import classes from './Button.module.scss'

import PropTypes from 'prop-types'

const button = (props) => (
    <button disabled={props.disabled}
        className={[classes.Button, classes[props.btnStyle]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
)

button.propTypes = {
    /**
     * Select the specific style of the button.
     */
    btnStyle: PropTypes.oneOf(['White', 'Green', 'Orange', 'Pink', 'LightBlue']),
    /**
     * Whether the component can be interacted with
     */
    disabled: PropTypes.bool,
    /**
     * Function triggered upon clicking the button
     */
    clicked: PropTypes.func,
    /**
     * What to put within the button
     */
    children: PropTypes.string,
}

export default button

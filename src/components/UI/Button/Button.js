import React from 'react'

import classes from './Button.module.scss'

/*
 * Button component for triggering specific actions
 * 
 * -- PROPS ATTRIBUTES AVAILABLE --
 * 
 * 'btnStyle': select the specific style of the button. Valid values are:
 * - White: white background and black text
 * - Green: dark green background and white text
 * - Orange: orange background and white text
 * - Pink: pink background and white text
 *
 * 'disabled' - whether the component can be interacted with
 * 
 * 'children' - What to write within the button
 * 
 */
const button = (props) => (
    <button disabled={props.disabled}
        className={[classes.Button, classes[props.btnStyle]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
)

export default button
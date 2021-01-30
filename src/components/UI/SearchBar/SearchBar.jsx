import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './SearchBar.module.scss'

import PropTypes from 'prop-types'

const searchBar = (props) => (
    <div>
        <input type="text" className={styles.SearchBar} placeholder={props.children}/>
        <FontAwesomeIcon icon={faSearch} className={styles.SearchIcon}/>
    </div>
)

searchBar.propTypes = {
    /**
     * Select the specific style of the button.
     */
    btnStyle: PropTypes.oneOf(['White', 'Green', 'Orange', 'Pink']),
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
    children: PropTypes.object,
}

export default searchBar

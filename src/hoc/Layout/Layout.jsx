import React, {useState} from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Aux from '../Auxiliary/Auxiliary'

// import styles from './Layout.module.scss'

import profileImage from '../../assets/images/example_profile.jpg'

const Layout = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <Aux>
            <Toolbar imageSrc={profileImage} menuToggleClicked={toggleMenuHandler} isMenuOpen={isMenuOpen}></Toolbar>
            {isMenuOpen ? null : <main>{props.children}Body</main>}
        </Aux>
    )
}

export default Layout
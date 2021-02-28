import React, { useState } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Aux from "../Auxiliary/Auxiliary";

import styles from "./Layout.module.scss";

import profileImage from "../../assets/images/example_profile.jpg";

const Layout = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Aux>
            <Toolbar
                imageSrc={profileImage}
                menuToggleClicked={toggleMenuHandler}
                isMenuOpen={isMenuOpen}
                backRequired={true}
                searchBarRequired={true}
            ></Toolbar>
            {isMenuOpen ? null : (
                <main className={styles.MobileMain}>{props.children}</main>
            )}
        </Aux>
    );
};

export default Layout;

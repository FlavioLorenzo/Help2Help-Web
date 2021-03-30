import React, { useState } from "react";

import Aux from "../Auxiliary/Auxiliary";
import Header from "../../containers/Header/Header";

import styles from "./Layout.module.scss";

const Layout = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Aux>
            <Header
                isMenuOpen={isMenuOpen}
                toggleMenuHandler={toggleMenuHandler}
            />
            {isMenuOpen ? null : (
                <main className={styles.MobileMain}>{props.children}</main>
            )}
        </Aux>
    );
};

export default Layout;

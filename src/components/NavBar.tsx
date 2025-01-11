import React from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

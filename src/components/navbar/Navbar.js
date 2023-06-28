"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
export default function Navbar() {
    const [activeLink, setActiveLink] = useState("main");
    return (
        <div className={styles.Navbar}>
            <Link
                className={styles.Navbar__Link}
                onClick={() => {
                    setActiveLink("main");
                }}
                href="/"
            >
                <span
                    className={classNames(styles.Navbar__Text, {
                        [styles["Navbar__Text--active"]]: activeLink == "main",
                    })}
                >
                    Main
                </span>
            </Link>
            <Link
                className={styles.Navbar__Link}
                onClick={() => {
                    setActiveLink("about");
                }}
                href="/about"
            >
                <span
                    className={classNames(styles.Navbar__Text, {
                        [styles["Navbar__Text--active"]]: activeLink == "about",
                    })}
                >
                    About
                </span>
            </Link>
            <Link
                onClick={() => {
                    setActiveLink("projects");
                }}
                className={styles.Navbar__Link}
                href="/projects"
            >
                <span
                    className={classNames(styles.Navbar__Text, {
                        [styles["Navbar__Text--active"]]:
                            activeLink == "projects",
                    })}
                >
                    Projects
                </span>
            </Link>
            <Link
                className={styles.Navbar__Link}
                onClick={() => {
                    setActiveLink("contact");
                }}
                href="/contacts"
            >
                <span
                    className={classNames(styles.Navbar__Text, {
                        [styles["Navbar__Text--active"]]:
                            activeLink == "contact",
                    })}
                >
                    Contact Me
                </span>
            </Link>
        </div>
    );
}

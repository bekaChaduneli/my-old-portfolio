"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    //   const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            position > 110 ? setScrolled(true) : setScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        console.log(pathname);
    }, [pathname]);
    return (
        <div className={styles.Navbar}>
            <div
                className={classNames(styles.Navbar__Box, {
                    [styles["Navbar__Box--active"]]: scrolled,
                })}
            >
                <Link className={styles.Navbar__Link} href="/">
                    <span
                        className={classNames(styles.Navbar__Text, {
                            [styles["Navbar__Text--active"]]: pathname == "/",
                        })}
                    >
                        Main
                    </span>
                </Link>
                <Link className={styles.Navbar__Link} href="/about">
                    <span
                        className={classNames(styles.Navbar__Text, {
                            [styles["Navbar__Text--active"]]:
                                pathname == "/about",
                        })}
                    >
                        About
                    </span>
                </Link>
                <Link className={styles.Navbar__Link} href="/projects">
                    <span
                        className={classNames(styles.Navbar__Text, {
                            [styles["Navbar__Text--active"]]:
                                pathname == "/projects" ||
                                pathname == "/projects/archive",
                        })}
                    >
                        Projects
                    </span>
                </Link>
                <Link className={styles.Navbar__Link} href="/contacts">
                    <span
                        className={classNames(styles.Navbar__Text, {
                            [styles["Navbar__Text--active"]]:
                                pathname == "/contacts",
                        })}
                    >
                        Contact
                    </span>
                </Link>
            </div>
        </div>
    );
}

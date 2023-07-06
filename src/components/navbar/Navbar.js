"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
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

        if (window.innerWidth >= 1024) {
            gsap.to(".navbar", {
                y: 60,
                opacity: 1,
                duration: 1,
            });
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        console.log(pathname);
    }, [pathname]);
    return (
        <div className={`${styles.Navbar} navbar`}>
            <div className={styles.Navbar__Box}>
                <div
                    className={classNames(styles.Navbar__Background, {
                        [styles["Navbar__Background--active"]]: scrolled,
                    })}
                />
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

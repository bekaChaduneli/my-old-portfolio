"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState("main");
  const [scrolled, setScrolled] = useState(false);
  //   const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      //   setScrollPosition(position);
      position > 110 ? setScrolled(true) : setScrolled(false);
      console.log(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.Navbar}>
      <div
        className={classNames(styles.Navbar__Box, {
          [styles["Navbar__Box--active"]]: scrolled,
        })}
      >
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
              [styles["Navbar__Text--active"]]: activeLink == "projects",
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
              [styles["Navbar__Text--active"]]: activeLink == "contact",
            })}
          >
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
}

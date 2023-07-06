"use client";
import Contact from "@/components/contact/Contact";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import { gsap } from "gsap";
export default function Page() {
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            gsap.to(".headline", {
                y: -20,
                opacity: 1,
                duration: 1,
            });
            gsap.to(".text", {
                y: -20,
                opacity: 1,
                duration: 1,
                delay: 0.4,
            });
        }
    }, []);
    return (
        <div className={styles.Contact}>
            <h1 className={`${styles.Contact__Headline} headline`}>
                Contact Me
            </h1>
            <div className={`${styles.Contact__Text} text`}>
                <p>
                    Get in touch or shoot me an email directly on{" "}
                    <strong>beka.chaduneli.1@btu.edu.ge</strong>
                </p>
            </div>
            <Contact />
        </div>
    );
}

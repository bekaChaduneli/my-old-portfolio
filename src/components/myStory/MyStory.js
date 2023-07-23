import React, { useEffect } from "react";
import styles from "./myStory.module.scss";
import { gsap } from "gsap";
export default function MyStory() {
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            gsap.to(".headline", {
                y: -30,
                opacity: 1,
                duration: 1,
            });
            gsap.to(".text", {
                y: -20,
                opacity: 1,
                duration: 1,
                delay: 0.4,
            });
            gsap.to(".story", {
                y: -20,
                opacity: 1,
                duration: 1,
                delay: 0.8,
            });
        }
    }, []);
    return (
        <div className={styles.Story}>
            <h1 className={`${styles.Story__Headline} headline`}>I AM BEKA</h1>
            <h2 className={`${styles.Story__Text} text`}>
                Full-Stack Developer From <strong>Tbilisi, Georgia</strong>
            </h2>
            <div className={`${styles.Story__Me} story`}>
                <p>
                    I started learning programming on{" "}
                    <strong>December 20, 2022</strong>, and I progressing daily
                    since then. Nowtime, I am working as an intern as a
                    full-stack developer at Artmedia.
                </p>
            </div>
        </div>
    );
}

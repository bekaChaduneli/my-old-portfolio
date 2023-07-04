import React from "react";
import styles from "./myStory.module.scss";
export default function MyStory() {
    return (
        <div className={styles.Story}>
            <h1 className={styles.Story__Headline}>I'M BEKA</h1>
            <h2 className={styles.Story__Text}>
                Full Stack Developer From <strong>Tbilisi, Georgia</strong>
            </h2>
            <div className={styles.Story__Me}>
                <p>
                    I started learning programming on{" "}
                    <strong>December 20, 2022</strong>, and I progressing daily
                    since then. Nowtime, I am working as an intern as a
                    front-end developer at Artmedia.
                </p>
            </div>
        </div>
    );
}

"use client";
import React, { useEffect, useState } from "react";
import styles from "./loader.module.scss";
import classNames from "classnames";

export default function Loader() {
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        const body = document.querySelector("body");
        const html = document.querySelector("html");

        setTimeout(() => {
            setLoading(true);
            body.style.overflow = "visible";
            html.style.overflow = "visible";
            body.style.overflowX = "hidden";
            html.style.overflowX = "hidden";
        }, 1200);
        setTimeout(() => {
            setDisplay(false);
        }, 2000);
    }, []);

    return (
        <>
            {display && (
                <div
                    className={classNames(styles.Wrapper, {
                        [styles["FadeEffect"]]: loading,
                    })}
                >
                    <div className={styles.Wrapper__Content}>
                        <div className={styles.Wrapper__ProgressBar} />
                        <h2 className={styles.Wrapper__Headline}>
                            Beka Chaduneli
                        </h2>
                        <h1 className={styles.Wrapper__Text}>Portfolio</h1>
                    </div>
                </div>
            )}
        </>
    );
}

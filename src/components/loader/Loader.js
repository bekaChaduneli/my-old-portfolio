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
                        <h2 className={styles.Wrapper__Headline}>Chaduneli</h2>
                        <div className={styles.Wrapper__ContentWrapper}>
                            <div className={styles.Wrapper__Left}>
                                <span className={styles.Wrapper__Text}>
                                    Beka
                                </span>
                            </div>
                            <div className={styles.Wrapper__Right}>
                                <span className={styles.Wrapper__RightHeadline}>
                                    Frontend developer
                                </span>
                                <span className={styles.Wrapper__RightText}>
                                    portfolio
                                </span>
                                <span className={styles.Wrapper__RightText}>
                                    2023
                                </span>
                            </div>
                        </div>
                        <div className={styles.Demo}>
                            <div className={styles.Demo__ProgressBar}>
                                <div
                                    className={styles.Demo__ProgressBarValue}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

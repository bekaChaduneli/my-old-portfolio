import Link from "next/link";
import React from "react";
import styles from "./appButton.module.scss";
import classNames from "classnames";
export default function AppButton({ href, children, sm, md, lg, xl }) {
    if (href) {
        return (
            <Link
                className={classNames(styles.Button, {
                    [styles["Button--sm"]]: sm,
                    [styles["Button--md"]]: md,
                    [styles["Button--lg"]]: lg,
                    [styles["Button--xl"]]: xl,
                })}
                href={href}
            >
                {children}
            </Link>
        );
    }
    return (
        <button
            className={classNames(styles.Button, {
                [styles["Button--sm"]]: sm,
                [styles["Button--md"]]: md,
                [styles["Button--lg"]]: lg,
                [styles["Button--xl"]]: xl,
            })}
        >
            {children}
        </button>
    );
}

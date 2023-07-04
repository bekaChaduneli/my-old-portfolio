import Link from "next/link";
import React from "react";
import styles from "./appButton.module.scss";
import classNames from "classnames";
export default function AppButton({ href, children, type, sm, md, lg, xl }) {
    if (href) {
        return (
            <Link
                className={
                    type == "white"
                        ? classNames(styles.WhiteButton, {
                              [styles["WhiteButton--sm"]]: sm,
                              [styles["WhiteButton--md"]]: md,
                              [styles["WhiteButton--lg"]]: lg,
                              [styles["WhiteButton--xl"]]: xl,
                          })
                        : classNames(styles.NormButton, {
                              [styles["NormButton--sm"]]: sm,
                              [styles["NormButton--md"]]: md,
                              [styles["NormButton--lg"]]: lg,
                              [styles["NormButton--xl"]]: xl,
                          })
                }
                href={href}
            >
                {children}
            </Link>
        );
    }
    return (
        <button
            className={
                type == "white"
                    ? classNames(styles.WhiteButton, {
                          [styles["WhiteButton--sm"]]: sm,
                          [styles["WhiteButton--md"]]: md,
                          [styles["WhiteButton--lg"]]: lg,
                          [styles["WhiteButton--xl"]]: xl,
                      })
                    : classNames(styles.NormButton, {
                          [styles["NormButton--sm"]]: sm,
                          [styles["NormButton--md"]]: md,
                          [styles["NormButton--lg"]]: lg,
                          [styles["NormButton--xl"]]: xl,
                      })
            }
        >
            {children}
        </button>
    );
}

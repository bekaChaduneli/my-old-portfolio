"use client";
import { useRef } from "react";
import {
    motion,
    useSpring,
    useTransform,
    useMotionValue,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";
import styles from "./framerText.module.scss";
import classNames from "classnames";

export default function FramerText({
    children,
    custom,
    left,
    right,
    baseVelocity = 100,
}) {
    const baseX = useMotionValue(0);
    const smoothVelocity = useSpring(0, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });
    const x = useTransform(baseX, (v) => `${wrap(-0, -54, v)}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });
    if (custom) {
        return (
            <div className={styles.Parallax}>
                <motion.div
                    className={classNames(styles.Parallax__Scroller, {
                        [styles["Parallax__Scroller--left"]]: left,
                        [styles["Parallax__Scroller--right"]]: right,
                    })}
                    style={{ x }}
                >
                    {children}
                </motion.div>
            </div>
        );
    }
    return (
        <div className={styles.Parallax}>
            <motion.div className={styles.Parallax__Scroller} style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

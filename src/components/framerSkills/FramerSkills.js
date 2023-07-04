import React from "react";
import styles from "./framerSkills.module.scss";
import FramerText from "../framerText/FramerText";
export default function FramerSkills({ data }) {
    const midpoint = Math.ceil(data?.length / 2);
    const firstHalf = data?.slice(0, midpoint);
    const secondHalf = data?.slice(midpoint);
    return (
        <div className={styles.SkillsWrapper}>
            <FramerText left custom baseVelocity={-3}>
                {firstHalf?.map((item, index) => {
                    return (
                        <span key={index}>
                            <div className={styles.Skills}>
                                {" "}
                                <img
                                    src={`/images/${item.icon}`}
                                    className={styles.Skills__SkillIcon}
                                />
                                <p className={styles.Skills__Text}>
                                    {item.name}
                                </p>
                            </div>
                        </span>
                    );
                })}
            </FramerText>
            <FramerText right custom baseVelocity={3}>
                {secondHalf?.map((item, index) => {
                    return (
                        <span key={index}>
                            <div className={styles.Skills}>
                                {" "}
                                <img
                                    src={`/images/${item.icon}`}
                                    className={styles.Skills__SkillIcon}
                                />
                                <p className={styles.Skills__Text}>
                                    {item.name}
                                </p>
                            </div>
                        </span>
                    );
                })}
            </FramerText>
        </div>
    );
}

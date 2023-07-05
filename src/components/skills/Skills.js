"use client";
import React, { useState } from "react";
import styles from "./skills.module.scss";
export default function Skills({ data }) {
    const [active, setActive] = useState(null);
    return (
        <div className={styles.Wrapper}>
            {data?.map((skill, index) => {
                return (
                    <>
                        <span
                            onMouseEnter={() => {
                                setActive(skill);
                            }}
                            onMouseLeave={() => {
                                setActive(null);
                            }}
                            key={index}
                            className={styles.Wrapper__SkillsBox}
                        >
                            <img
                                className={styles.Wrapper__SkillIcon}
                                src={`/images${skill.icon}`}
                            />
                            <p className={styles.Wrapper__SkillName}>
                                {skill.name}
                            </p>
                        </span>
                    </>
                );
            })}
        </div>
    );
}

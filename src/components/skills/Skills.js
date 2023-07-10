"use client";
import React, { useEffect, useState } from "react";
import styles from "./skills.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
export default function Skills({ data }) {
    // useEffect(() => {
    //     if (window.innerWidth >= 1024) {
    //         gsap.registerPlugin(ScrollTrigger);
    //         const skills = document.querySelector(".skillss");
    //         const skill = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: skills,
    //                 start: "top bottom",
    //                 end: "80% bottom",
    //                 scrub: 1,
    //                 markers: true,
    //             },
    //         });
    //         skill.to(skills, {
    //             y: -60,
    //             opacity: 1,
    //             duration: 1,
    //         });
    //     }
    // }, [data]);
    return (
        <div className={styles.Wrapper}>
            {data?.map((skill, index) => {
                return (
                    <span key={index} className={styles.Wrapper__SkillsBox}>
                        <img
                            className={styles.Wrapper__SkillIcon}
                            src={`/images${skill.icon}`}
                        />
                        <p className={styles.Wrapper__SkillName}>
                            {skill.name}
                        </p>
                    </span>
                );
            })}
        </div>
    );
}

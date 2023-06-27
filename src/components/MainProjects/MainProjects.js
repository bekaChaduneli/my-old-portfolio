"use client";
import React, { useState } from "react";
import FramerText from "@/components/framerText/FramerText";
import styles from "./mainProjects.module.scss";
export default function MainProjects({ data }) {
    console.log(data?.projects);
    return (
        <div className={styles.ProjectsWrapper}>
            <div className={styles.ProjectsHeadlines}>
                <h1 className={styles.ProjectsHeadlines__Text}>Project name</h1>
                <h1 className={styles.ProjectsHeadlines__Text}>Project Date</h1>
            </div>
            {data?.projects.map((project) => {
                const [hovered, setHovered] = useState(false);
                return (
                    project.best && (
                        <div
                            onMouseEnter={() => {
                                setHovered(true);
                            }}
                            onMouseLeave={() => {
                                setHovered(false);
                            }}
                        >
                            {hovered ? (
                                <div className={styles.HoveredProject}>
                                    <FramerText baseVelocity={-2}>
                                        <span className={styles.Text}>
                                            {" "}
                                            {project.name}{" "}
                                        </span>
                                    </FramerText>
                                    <FramerText baseVelocity={2}>
                                        <span className={styles.Text}>
                                            {" "}
                                            {project.name}{" "}
                                        </span>
                                    </FramerText>
                                </div>
                            ) : (
                                <div className={styles.Project}>
                                    <h1 className={styles.Project__Name}>
                                        {project.name}
                                    </h1>
                                    <h2 className={styles.Projec__Date}>
                                        {project.date}
                                    </h2>
                                </div>
                            )}
                        </div>
                    )
                );
            })}
        </div>
    );
}

{
    /* <FramerText baseVelocity={-8}>
<span className={styles.Text}> SPOTIFY </span>
</FramerText>
<FramerText baseVelocity={8}>
<span className={styles.Text}> CLONE </span>
</FramerText> */
}

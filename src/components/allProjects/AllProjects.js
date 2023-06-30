import { CalendarClock, Github, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import React from "react";
import styles from "./allProjects.module.scss";
export default function AllProjects({ data }) {
    return (
        <div className={styles.Projects}>
            {data?.projects.map((project, index) => {
                return (
                    <div className={styles.Projects__Project} key={index}>
                        <img
                            className={styles.Projects__Background}
                            src={`images${project.image[0]}`}
                        />
                        <div className={styles.Projects__ProjectAbout}>
                            <h1 className={styles.Projects__ProjectHeadline}>
                                {project.name}
                            </h1>
                            <div className={styles.Projects__ProjectText}>
                                <p>{project.slug}</p>
                            </div>
                            <div
                                className={styles.Projects__ProjectDateWrapper}
                            >
                                <CalendarClock
                                    className={styles.Projects__ProjectDateIcon}
                                />{" "}
                                <span className={styles.Projects__ProjectDate}>
                                    {project.date}
                                </span>
                            </div>
                            <div
                                className={
                                    styles.Projects__ProjectFrameworkWrapper
                                }
                            >
                                {project.frameworks?.map((framework) => (
                                    <img
                                        src={`/images/${framework}.png`}
                                        className={
                                            styles.Projects__ProjectFramework
                                        }
                                    />
                                ))}
                            </div>
                            <div
                                className={
                                    styles.Projects__ProjectsLinksWrapper
                                }
                            >
                                <Link
                                    className={styles.Projects__ProjectsLink}
                                    href={`${project?.github}`}
                                >
                                    <Github /> Github{" "}
                                </Link>
                                <Link
                                    className={styles.Projects__ProjectsLink}
                                    href={`${project?.live}`}
                                >
                                    <LayoutTemplate /> Live{" "}
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

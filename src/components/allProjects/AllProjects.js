import { CalendarClock, Github, LayoutTemplate } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AllProjects({ data }) {
    return (
        <div>
            {data?.projects.map((project, index) => {
                projectNumber++;
                return (
                    !project.best && (
                        <div className={styles.Projects} key={index}>
                            <div className={styles.Projects__Project}>
                                <Image src={project.image[0]} />
                                <div className={styles.Projects__ProjectAbout}>
                                    <h1
                                        className={
                                            styles.Projects__ProjectHeadline
                                        }
                                    >
                                        {project.name}
                                    </h1>
                                    <div
                                        className={styles.Projects__ProjectText}
                                    >
                                        <p>{project.slug}</p>
                                    </div>
                                    <div
                                        className={
                                            styles.Projects__ProjectDateWrapper
                                        }
                                    >
                                        <CalendarClock
                                            className={
                                                styles.Projects__ProjectDateIcon
                                            }
                                        />{" "}
                                        <span
                                            className={
                                                styles.Projects__ProjectDate
                                            }
                                        >
                                            {project.date}
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            styles.Projects__ProjectFrameworkWrapper
                                        }
                                    >
                                        {project.frameworks.map(
                                            (framework, key) => (
                                                <Image
                                                    src={`/images${framework}`}
                                                    width="20px"
                                                    height="20px"
                                                    className={
                                                        styles.Projects__ProjectFramework
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                    <div
                                        className={
                                            styles.Projects__ProjectsLinksWrapper
                                        }
                                    >
                                        <Link href={project.github}>
                                            {" "}
                                            <Github /> Github{" "}
                                        </Link>
                                        <Link href={project.live}>
                                            {" "}
                                            <LayoutTemplate /> Live{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                );
            })}
        </div>
    );
}

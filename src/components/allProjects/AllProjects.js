import { ArrowLeft, ArrowRight, CalendarClock } from "lucide-react";
import Link from "next/link";
import styles from "./allProjects.module.scss";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function AllProjects({ data }) {
    const itemsPerPage = 10;
    const videoRefs = useRef([]);
    const [currentFramework, setCurrentFramework] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredProjects = currentFramework
        ? data?.projects.filter((project) =>
              project.frameworks.includes(currentFramework)
          )
        : data?.projects;

    const currentItems = filteredProjects?.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const totalPages = Math.ceil(filteredProjects?.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleVideoMouseEnter = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };

    const handleVideoMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
            videoRefs.current[index].currentTime = 0;
        }
    };

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            gsap.registerPlugin(ScrollTrigger);
            const linkElements = document.querySelectorAll(".trigger");
            linkElements?.forEach((linkElement) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: linkElement,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 1,
                        markers: false,
                    },
                });

                tl.to(linkElement, {
                    y: -80,
                    opacity: 1,
                    duration: 1,
                });
                gsap.to(".projects", {
                    y: -70,
                    opacity: 1,
                    duration: 1,
                    delay: 0.6,
                });
            });
        }
    }, [filteredProjects]);

    const handleFrameworkClick = (framework) => {
        setCurrentFramework(framework);
    };

    return (
        <div className={`${styles.Wrapper} projects`}>
            <div className={styles.Projects__Filter}>
                <span
                    className={classNames(styles.Projects__FilterItem, {
                        [styles["Projects__FilterItem--active"]]:
                            currentFramework === "",
                    })}
                    onClick={() => handleFrameworkClick("")}
                >
                    All
                </span>
                <span
                    className={classNames(styles.Projects__FilterItem, {
                        [styles["Projects__FilterItem--active"]]:
                            currentFramework === "react",
                    })}
                    onClick={() => handleFrameworkClick("react")}
                >
                    React
                </span>
                <span
                    className={classNames(styles.Projects__FilterItem, {
                        [styles["Projects__FilterItem--active"]]:
                            currentFramework === "javascript",
                    })}
                    onClick={() => handleFrameworkClick("javascript")}
                >
                    Javascript
                </span>
                <span
                    className={classNames(styles.Projects__FilterItem, {
                        [styles["Projects__FilterItem--active"]]:
                            currentFramework === "typescript",
                    })}
                    onClick={() => handleFrameworkClick("typescript")}
                >
                    Typescript
                </span>
            </div>
            <div className={styles.Projects}>
                {currentItems?.map((project, index) => (
                    <Link
                        key={index}
                        className={`${styles.Project__ProjectsLink} trigger`}
                        onMouseEnter={() => handleVideoMouseEnter(index)}
                        onMouseLeave={() => handleVideoMouseLeave(index)}
                        href={`/projects/${project?.id}`}
                    >
                        <div
                            style={{
                                height: `${project.height}px`,
                            }}
                            className={styles.Project}
                            key={index}
                        >
                            <div className={styles.Project__HoverBackground} />
                            <figure className={styles.Project__Background}>
                                {project.videoLink ? (
                                    <video
                                        src={require(`../../assets/videos/${project.videoLink}.mp4`)}
                                        ref={(ref) => {
                                            videoRefs.current[index] = ref;
                                        }}
                                        className={styles.Project__Video}
                                        loop
                                        muted
                                    />
                                ) : (
                                    <figure
                                        className={
                                            styles.Project__BackgroundImage
                                        }
                                    >
                                        <img
                                            key={index}
                                            className={
                                                styles.Project__BackgroundImg
                                            }
                                            id={`image-${index}`}
                                            alt="project-image"
                                            src={`/images/${project.image[0]}`}
                                        />
                                    </figure>
                                )}
                            </figure>
                            <div className={styles.Project__ProjectAbout}>
                                <h1 className={styles.Project__ProjectHeadline}>
                                    {project.name}
                                </h1>
                                <div className={styles.Project__ProjectText}>
                                    <p>{project.slug}</p>
                                </div>
                                <div
                                    className={
                                        styles.Project__ProjectFrameworkWrapper
                                    }
                                >
                                    {project.frameworks?.map(
                                        (framework, index) => (
                                            <img
                                                key={index}
                                                src={`/images/${framework}.png`}
                                                className={
                                                    styles.Project__ProjectFramework
                                                }
                                                alt="framework"
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                <div className={styles.PaginationWrapper}>
                    <div className={styles.Pagination}>
                        <button
                            className={classNames(styles.Pagination__Button, {
                                [styles["Pagination__Button--disabled"]]:
                                    currentPage === 1,
                            })}
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            <ArrowLeft
                                className={styles.Pagination__ButtonIcon}
                            />
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <span
                                key={index}
                                className={classNames(
                                    styles.Pagination__Element,
                                    {
                                        [styles["Pagination__Element--active"]]:
                                            currentPage === index + 1,
                                    }
                                )}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={currentPage === index + 1}
                            >
                                {index + 1}
                            </span>
                        ))}
                        <button
                            className={classNames(styles.Pagination__Button, {
                                [styles["Pagination__Button--disabled"]]:
                                    currentPage === totalPages,
                            })}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ArrowRight
                                className={styles.Pagination__ButtonIcon}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

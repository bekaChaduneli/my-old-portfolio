"use client";
import MyStory from "@/components/myStory/MyStory";
import React, { useEffect, useState, useRef } from "react";
import styles from "./page.module.scss";
import TimelineBox from "@/components/timelineBox/TimelineBox";
import FramerSkills from "@/components/framerSkills/FramerSkills";
import RecommendedProjects from "@/components/recommendedProjects/RecommendedProjects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Page() {
    const [data, setData] = useState(null);
    const scrollTriggerRef = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/bigdata.json");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (window.innerWidth >= 1024 && data) {
            gsap.registerPlugin(ScrollTrigger);

            const triggerElements = document.querySelectorAll(".trigger");

            triggerElements.forEach((triggerElement) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "top 80%",
                        end: "bottom 70%",
                        scrub: 1,
                        markers: false,
                    },
                });

                tl.to(triggerElement, {
                    y: -30,
                    opacity: 1,
                    duration: 1,
                });
                scrollTriggerRef.current.push(tl.scrollTrigger);
            });
        }

        return () => {
            scrollTriggerRef.current.forEach((trigger) => {
                trigger.kill();
            });
            scrollTriggerRef.current = [];
        };
    }, [data]);

    return (
        <div className={styles.About}>
            <MyStory />
            <div className={`${styles.About__ExperienceWrapper} trigger`}>
                <h1 className={styles.About__ExperienceText}>
                    Work experience
                </h1>
                <TimelineBox data={data?.personal.work} />
            </div>
            <div className={`${styles.About__ExperienceWrapper} trigger`}>
                <h1 className={styles.About__ExperienceText}>Education</h1>
                {data?.personal.educations.map((education, index) => {
                    return <TimelineBox key={index} data={education} />;
                })}
            </div>
            <div className={`${styles.About__ExperienceWrapper} trigger`}>
                <h1 className={styles.About__ExperienceText}>Languages</h1>
                <TimelineBox data={data?.personal.languages} />
            </div>
            <div className={`${styles.About__ExperienceWrapper} trigger`}>
                <h1 className={styles.About__Projects}>Recommended Projects</h1>
                <RecommendedProjects data={data} />
            </div>
            <h1 className={styles.About__Skills}>SKILLS</h1>
            <FramerSkills data={data?.skills} />
        </div>
    );
}

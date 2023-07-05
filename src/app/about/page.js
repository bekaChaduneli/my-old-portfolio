"use client";
import MyStory from "@/components/myStory/MyStory";
import React from "react";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import TimelineBox from "@/components/timelineBox/TimelineBox";
import FramerSkills from "@/components/framerSkills/FramerSkills";
import RecommendedProjects from "@/components/recommendedProjects/RecommendedProjects";

export default function Page() {
    const [data, setData] = useState(null);
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
    return (
        <div className={styles.About}>
            <MyStory />
            <div className={styles.About__ExperienceWrapper}>
                <h1 className={styles.About__ExperienceText}>
                    Work experience
                </h1>
                <TimelineBox data={data?.personal.work} />
            </div>
            <div className={styles.About__ExperienceWrapper}>
                <h1 className={styles.About__ExperienceText}>Education</h1>
                {data?.personal.educations.map((education, index) => {
                    return <TimelineBox key={index} data={education} />;
                })}
            </div>
            <div className={styles.About__ExperienceWrapper}>
                <h1 className={styles.About__ExperienceText}>Languages</h1>
                <TimelineBox data={data?.personal.languages} />
            </div>
            <div className={styles.About__ProjectsWrapper}>
                <h1 className={styles.About__Projects}>Recommended Projects</h1>
                <RecommendedProjects data={data} />
            </div>
            <h1 className={styles.About__Skills}>SKILLS</h1>
            <FramerSkills data={data?.skills} />
        </div>
    );
}

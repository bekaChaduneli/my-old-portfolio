"use client";

import MainProjects from "@/components/mainProjects/MainProjects";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import AppButton from "@/components/appButton/AppButton";
import Skills from "@/components/skills/Skills";

export default function Home() {
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
        <>
            <div className={styles.Wrapper}>
                <Header />
                <div className={styles.Wrapper__Projects}>
                    <h1 className={styles.Wrapper__Headline}>Main Projects</h1>
                    <MainProjects data={data} />
                    <div className={styles.Wrapper__Button}>
                        <AppButton md type="white" href="/projects/archive">
                            SEE MORE
                        </AppButton>
                    </div>
                </div>
                <div className={styles.Wrapper__Skills}>
                    <h1 className={styles.Wrapper__Headline}>Skills</h1>
                    <Skills data={data?.skills} />
                </div>
            </div>
        </>
    );
}

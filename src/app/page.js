"use client";

import MainProjects from "@/components/mousePointer/MainProjects";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import AppButton from "@/components/appButton/AppButton";

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
                    <h1 className={styles.Wrapper__MainProjectHeadline}>
                        Main Projects
                    </h1>
                    <MainProjects data={data} />
                    <div className={styles.Wrapper__Button}>
                        <AppButton lg href="/projects/archive">
                            See More
                        </AppButton>
                    </div>
                </div>
            </div>
        </>
    );
}

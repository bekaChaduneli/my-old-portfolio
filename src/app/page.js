"use client";

import MainProjects from "@/components/mousePointer/MainProjects";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";

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
                <div className={styles.Wrapper__Projects}>
                    <MainProjects data={data} />
                </div>
            </div>
        </>
    );
}

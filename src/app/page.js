"use client";
import MainProjects from "@/components/MainProjects/MainProjects";
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
        <div className={styles.Wrapper}>
            <MainProjects data={data} />
        </div>
    );
}

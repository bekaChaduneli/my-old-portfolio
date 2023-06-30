"use client";
import React from "react";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import AllProjects from "@/components/allProjects/AllProjects";

export default function page() {
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
        <div className={styles.Archive}>
            <h1 className={styles.Archive__Text}>All Projects</h1>
            <AllProjects data={data} />
        </div>
    );
}

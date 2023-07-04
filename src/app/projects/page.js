"use client";
import MainProjects from "@/components/mousePointer/MainProjects";
import React from "react";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import AppButton from "@/components/appButton/AppButton";
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
        <div className={styles.MainProjectsWrapper}>
            <h1 className={styles.MainProjectsWrapper__Text}>
                My Best Projects
            </h1>
            <MainProjects data={data} />
            <div className={styles.SeeMoreWrapper}>
                <AppButton md type="white" href="/projects/archive">
                    SEE MORE
                </AppButton>
            </div>
        </div>
    );
}

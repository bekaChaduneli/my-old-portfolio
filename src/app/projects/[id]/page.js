"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";
import AppButton from "@/components/appButton/AppButton";
export default function Page() {
    const [data, setData] = useState(null);
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/bigdata.json");
                const jsonData = await response.json();
                const project = jsonData.projects.filter(
                    (project) => project.id === params.id
                )[0];
                setData(project);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={styles.Project}>
            <h1 className={styles.Project__Headline}>{data?.name}</h1>
            <div className={styles.Project__Slug}>
                <p>{data?.slug}</p>
            </div>
            <div className={styles.Project__Frameworks}>
                {data?.frameworks.map((framework, index) => {
                    return (
                        <img
                            key={index}
                            src={`/images/${framework}.png`}
                            alt="Framework"
                            className={styles.Project__Framework}
                        />
                    );
                })}
            </div>
            <figure className={styles.Project__LaptopWrapper}>
                <img
                    src="/images/laptop.png"
                    alt="Laptop"
                    className={styles.Project__Laptop}
                />
                {data?.videoLink ? (
                    <video
                        src={require(`../../../assets/videos/${data?.videoLink}.mp4`)}
                        className={styles.Project__LaptopBackground}
                        autoPlay
                        loop
                        muted
                    />
                ) : (
                    <img
                        className={styles.Project__LaptopBackgroundImage}
                        alt="project background"
                        src={`/images/${data?.image[0]}`}
                    />
                )}
            </figure>
            <div className={styles.Project__ButtonsWrapper}>
                <AppButton lg href={data?.github}>
                    Github
                </AppButton>
                <AppButton lg href={data?.live}>
                    Live
                </AppButton>
            </div>
            <ul className={styles.Project__TextWrapper}>
                {data?.about.map((text, index) => {
                    return (
                        <li className={styles.Project__Text} key={index}>
                            {text}
                        </li>
                    );
                })}
            </ul>
            <figure className={styles.Project__ImagesWrapper}>
                {data?.image.map((img) => {
                    return (
                        <img
                            className={styles.Project__Images}
                            src={`/images/${img}`}
                        />
                    );
                })}
            </figure>
        </div>
    );
}

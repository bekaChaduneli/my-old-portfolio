"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.scss";
import AppButton from "@/components/appButton/AppButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".name", {
                opacity: 1,
                y: -30,
                duration: 1,
            });
            gsap.to(".slug", {
                opacity: 1,
                y: -20,
                duration: 1,
                delay: 0.4,
            });
            gsap.to(".frameworks", {
                opacity: 1,
                y: -20,
                duration: 1,
                delay: 0.6,
            });
            gsap.to(".trigger", {
                opacity: 1,
                y: -80,
                duration: 1.6,
                delay: 0.8,
            });

            const linkElements = document.querySelectorAll(".text");
            linkElements?.forEach((linkElement) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: linkElement,
                        start: "top bottom",
                        end: "140% bottom",
                        scrub: 1,
                        markers: false,
                    },
                });

                tl.to(linkElement, {
                    y: -40,
                    opacity: 1,
                    duration: 1,
                });
                const images = document.querySelectorAll(".image");
                images?.forEach((image) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: image,
                            start: "top bottom",
                            end: "400px bottom",
                            scrub: 1,
                            markers: false,
                        },
                    });

                    tl.to(image, {
                        y: -70,
                        opacity: 1,
                        duration: 1,
                    });
                });
            });
        }
    }, [data]);

    return (
        <div className={styles.Project}>
            <h1 className={`${styles.Project__Headline} name`}>{data?.name}</h1>
            <div className={`${styles.Project__Slug} slug`}>
                <p>{data?.slug}</p>
            </div>
            <div className={`${styles.Project__Frameworks} frameworks`}>
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
            <figure className={`${styles.Project__LaptopWrapper} trigger`}>
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
                    <figure className={styles.Project__LaptopBackgroundImage}>
                        <img
                            className={styles.Project__LaptopBackgroundImg}
                            alt="project background"
                            src={`/images/${data?.image[0]}`}
                        />
                    </figure>
                )}
            </figure>
            <div className={styles.Project__ButtonsWrapper}>
                {data?.github && (
                    <AppButton
                        lg
                        type="white"
                        target="_blank"
                        href={data?.github}
                    >
                        Github
                    </AppButton>
                )}
                {data?.live && (
                    <AppButton
                        type="white"
                        lg
                        target="_blank"
                        href={data?.live}
                    >
                        Live
                    </AppButton>
                )}
            </div>
            <ul className={styles.Project__TextWrapper}>
                {data?.about.map((text, index) => {
                    return (
                        <li
                            className={`${styles.Project__Text} text`}
                            key={index}
                        >
                            {text}
                        </li>
                    );
                })}
            </ul>
            <figure className={styles.Project__ImagesWrapper}>
                {data?.image.map((img, index) => {
                    return (
                        <img
                            key={index}
                            className={`${styles.Project__Images} image`}
                            src={`/images/${img}`}
                        />
                    );
                })}
            </figure>
        </div>
    );
}

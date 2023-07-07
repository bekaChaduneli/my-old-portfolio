"use client";

import MainProjects from "@/components/mainProjects/MainProjects";
import styles from "./page.module.scss";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/header/Header";
import AppButton from "@/components/appButton/AppButton";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
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
                        start: "top bottom",
                        end: "80% bottom",
                        scrub: 1,
                        markers: false,
                    },
                });

                tl.to(triggerElement, {
                    y: -76,
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
                <div className={`${styles.Wrapper__Skills} trigger`}>
                    <h1 className={styles.Wrapper__Headline}>Skills</h1>
                    <Skills data={data?.skills} />
                </div>
                <div className={`${styles.Wrapper__ContactWrapper} trigger`}>
                    <h1
                        className={`${styles.Wrapper__Contact} contactHeadline`}
                    >
                        Contact Me
                    </h1>
                    <div
                        className={`${styles.Wrapper__ContactText} contactText`}
                    >
                        <p>
                            Get in touch or shoot me an email directly on{" "}
                            <strong>beka.chaduneli.1@btu.edu.ge</strong>
                        </p>
                    </div>

                    <Contact />
                </div>
            </div>
        </>
    );
}

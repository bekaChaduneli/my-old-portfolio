import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./header.module.scss";
import { MapPin } from "lucide-react";
import { useTypingText } from "@/hooks/useTypingText";
import AppButton from "../appButton/AppButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function Header() {
  const { word } = useTypingText(
    [
      "Next",
      "Typescript",
      "React",
      "Javascript",
      "NodeJs",
      "Prisma",
      "Mysql",
      "Tailwind",
      "Three",
      "Scss",
      "Styled components",
      "Chakra",
      "Gsap",
      "",
      "Jquery",
      "Html",
      "Css",
    ],
    130,
    20
  );
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".headline", {
        opacity: 1,
        y: -30,
        duration: 1,
        delay: 1.4,
      });
      gsap.to(".text", {
        opacity: 1,
        y: -20,
        duration: 1,
        delay: 1.8,
      });
      gsap.to(".skills", {
        opacity: 1,
        y: -20,
        duration: 1,
        delay: 2,
      });
      gsap.to(".location", {
        opacity: 1,
        y: -20,
        duration: 1,
        delay: 2.2,
      });
      gsap.to(".buttons", {
        opacity: 1,
        y: -20,
        duration: 1,
        delay: 2.4,
      });
      const linkElement = document.querySelector(".header");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: linkElement,
          start: "-100px middle",
          end: "1000px middle",
          scrub: 1,
          markers: false,
        },
      });

      tl.to(linkElement, {
        y: -160,
        duration: 1,
      });
    }
  }, []);
  return (
    <div className={`${styles.Header} header`}>
      <h1 className={`${styles.Header__Headline} headline`}>Hi I am Beka</h1>
      <h2 className={`${styles.Header__Text} text`}>Full-Stack Developer</h2>
      <h1 className={`${styles.Header__Skills} skills`}>
        I Love <span className={styles.Header__SkillsValue}>{word}</span>
      </h1>
      <div className={`${styles.Header__Location} location`}>
        <MapPin className={styles.Header__LocationIcon} /> Tbilisi, Georgia
      </div>
      <div className={`${styles.Header__ButtonsWrapper} buttons`}>
        <AppButton lg href="/about">
          About me
        </AppButton>
      </div>
    </div>
  );
}

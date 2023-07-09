"use client";
import React from "react";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import AllProjects from "@/components/allProjects/AllProjects";
import { gsap } from "gsap";

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
    if (window.innerWidth >= 1024) {
      gsap.to(".text", {
        y: -20,
        opacity: 1,
        duration: 1,
      });
    }
  }, []);
  return (
    <div className={styles.Archive}>
      <h1 className={`${styles.Archive__Text} text`}>All Projects</h1>
      <AllProjects data={data} />
    </div>
  );
}

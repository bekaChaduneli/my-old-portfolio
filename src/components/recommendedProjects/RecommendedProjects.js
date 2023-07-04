import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./recommendedProjects.module.scss";

export default function RecommendedProjects({ data }) {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [hovered, setHovered] = useState("");
  const [projectOne, setProjectOne] = useState(null);
  const [projectTwo, setProjectTwo] = useState(null);

  useEffect(() => {
    if (data && data.projects && data.projects.length > 0) {
      let newNumber1 = getRandomNumber(0, data.projects.length - 1);
      let newNumber2 = getRandomNumber(0, data.projects.length - 1);

      while (newNumber1 === newNumber2) {
        newNumber2 = getRandomNumber(0, data.projects.length - 1);
      }

      setProjectOne(newNumber1);
      setProjectTwo(newNumber2);
    }
  }, [data]);

  useEffect(() => {
    console.log(projectOne);
    console.log(projectTwo);
  }, [projectOne, projectTwo]);

  return (
    <div className={styles.Wrapper}>
      <Link
        onMouseEnter={() => {
          setHovered(projectOne);
        }}
        onMouseLeave={() => {
          setHovered("");
        }}
        href={`/projects/${data?.projects[projectOne]?.id}`}
      >
        <figure className={styles.Wrapper__Left}>
          {projectOne !== null && (
            <>
              <img
                src={`/images/${data.projects[projectOne]?.image[0]}`}
                className={styles.Wrapper__Image}
                alt="Tbilisi"
              />
              {hovered === projectOne && (
                <video
                  src={require(`../../assets/videos/${data.projects[projectOne]?.videoLink}.mp4`)}
                  className={styles.Wrapper__Image}
                  autoPlay
                  loop
                  muted
                />
              )}
            </>
          )}
          <h1 className={styles.Wrapper__ImageText}>See more</h1>
        </figure>
      </Link>
      <Link
        onMouseEnter={() => {
          setHovered(projectTwo);
        }}
        onMouseLeave={() => {
          setHovered("");
        }}
        href={`/projects/${data?.projects[projectTwo]?.id}`}
      >
        <figure className={styles.Wrapper__Right}>
          {projectTwo !== null && (
            <>
              <img
                src={`/images/${data.projects[projectTwo]?.image[0]}`}
                className={styles.Wrapper__Image}
                alt="Tbilisi"
              />
              {hovered === projectTwo && (
                <video
                  src={require(`../../assets/videos/${data.projects[projectTwo]?.videoLink}.mp4`)}
                  className={styles.Wrapper__Image}
                  autoPlay
                  loop
                  muted
                />
              )}
            </>
          )}
          <span className={styles.Wrapper__ImageText}>See more</span>
        </figure>
      </Link>
    </div>
  );
}

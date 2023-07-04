import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import styles from "./recommendedProjects.module.scss";

export default function RecommendedProjects({ data }) {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [hovered, setHovered] = useState("");
  const [projectOne, setProjectOne] = useState(null);
  const [projectTwo, setProjectTwo] = useState(null);
  const videoRefs = useRef([]);

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

  const handleVideoMouseEnter = (index) => {
    setHovered(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleVideoMouseLeave = (index) => {
    setHovered("");
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <div className={styles.Wrapper}>
      <Link
        onMouseEnter={() => handleVideoMouseEnter(projectOne)}
        onMouseLeave={() => handleVideoMouseLeave(projectOne)}
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
              {data.projects[projectOne]?.videoLink && (
                <video
                  ref={(ref) => {
                    videoRefs.current[projectOne] = ref;
                  }}
                  src={require(`../../assets/videos/${data.projects[projectOne]?.videoLink}.mp4`)}
                  className={styles.Wrapper__Image}
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
        onMouseEnter={() => handleVideoMouseEnter(projectTwo)}
        onMouseLeave={() => handleVideoMouseLeave(projectTwo)}
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
              {data.projects[projectTwo]?.videoLink && (
                <video
                  ref={(ref) => {
                    videoRefs.current[projectTwo] = ref;
                  }}
                  src={require(`../../assets/videos/${data.projects[projectTwo]?.videoLink}.mp4`)}
                  className={styles.Wrapper__Image}
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

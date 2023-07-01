import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Github,
  LayoutTemplate,
} from "lucide-react";
import Link from "next/link";
import styles from "./allProjects.module.scss";
import { useState } from "react";
// import videoLink from "../../assets/breadit.mp4";
import classNames from "classnames";
export default function AllProjects({ data }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data?.projects.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <div className={styles.Projects}>
      {currentItems?.map((project, index) => {
        return (
          <div className={styles.Project} key={index}>
            <figure className={styles.Project__Background}>
              {/* <img
                className={styles.Project__BackgroundImage}
                id={`image-${index}`}
                // src={`images${project.image[0]}`}
                src="/images/3d-portfolio.png"
              /> */}
              {/* <div className={styles.Project__Overlay}></div> */}
              <video
                src={require("../../assets/breadit.mp4")}
                className={styles.Project__Video}
                autoPlay
                loop
                muted
              />
            </figure>
            <div className={styles.Project__ProjectAbout}>
              <h1 className={styles.Project__ProjectHeadline}>
                {project.name}
              </h1>
              <div className={styles.Project__ProjectText}>
                <p>{project.slug}</p>
              </div>
              <div className={styles.Project__ProjectDateWrapper}>
                <CalendarClock className={styles.Project__ProjectDateIcon} />{" "}
                <span className={styles.Project__ProjectDate}>
                  {project.date}
                </span>
              </div>
              <div className={styles.Project__ProjectFrameworkWrapper}>
                {project.frameworks?.map((framework) => (
                  <img
                    src={`/images/${framework}.png`}
                    className={styles.Project__ProjectFramework}
                  />
                ))}
              </div>
              <div className={styles.Project__ProjectsLinksWrapper}>
                <Link
                  className={styles.Project__ProjectsLink}
                  href={`${project?.github}`}
                >
                  <Github /> Github{" "}
                </Link>
                <Link
                  className={styles.Project__ProjectsLink}
                  href={`${project?.live}`}
                >
                  <LayoutTemplate /> Live{" "}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.PaginationWrapper}>
        <div className={styles.Pagination}>
          <button
            className={classNames(styles.Pagination__Button, {
              [styles["Pagination__Button--disabled"]]: currentPage === 1,
            })}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {" "}
            <ArrowLeft className={styles.Pagination__ButtonIcon} />
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={classNames(styles.Pagination__Element, {
                [styles["Pagination__Element--active"]]:
                  currentPage == index + 1,
              })}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </span>
          ))}
          <button
            className={classNames(styles.Pagination__Button, {
              [styles["Pagination__Button--disabled"]]:
                currentPage === totalPages,
            })}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
            <ArrowRight className={styles.Pagination__ButtonIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

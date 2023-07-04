import React from "react";
import styles from "./timelineBox.module.scss";

export default function TimelineBox({ data }) {
    return (
        <div className={styles.Timeline}>
            <ul className={styles.Timeline__Wrapper}>
                {data?.contents.map((content, index) => {
                    return (
                        <li className={styles.Timeline__Content} key={index}>
                            <div className={styles.Timeline__ContentHeader}>
                                <span className={styles.Timeline__ContentName}>
                                    {content.name}{" "}
                                    {data.name ? (
                                        <a
                                            className={
                                                styles.Timeline__ContentNameLink
                                            }
                                            href={data?.nameLink}
                                        >{`[${data?.name}]`}</a>
                                    ) : (
                                        ""
                                    )}
                                </span>
                                <span className={styles.Timeline__ContentData}>
                                    {" "}
                                    {content.data}
                                </span>
                            </div>
                            <div className={styles.Timeline__ContentText}>
                                <p>{content.text}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

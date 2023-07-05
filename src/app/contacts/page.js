import Contact from "@/components/contact/Contact";
import React from "react";
import styles from "./page.module.scss";
export default function page() {
    return (
        <div className={styles.Contact}>
            <h1 className={styles.Contact__Headline}>Contact Me</h1>
            <div className={styles.Contact__Text}>
                <p>
                    Get in touch or shoot me an email directly on{" "}
                    <strong>beka.chaduneli.1@btu.edu.ge</strong>
                </p>
            </div>
            <Contact />
        </div>
    );
}

import { Github, Linkedin } from "lucide-react";
import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.Footer}>
                <div className={styles.Footer__TextWrapper}>
                    <h1 className={styles.Footer__Text}>
                        Powered by Beka Chaduneli
                    </h1>
                </div>
                <div className={styles.Footer__Socials}>
                    <Link
                        target="_blank"
                        className={styles.Footer__IconLink}
                        href="https://github.com/bekaChaduneli"
                    >
                        <Github className={styles.Footer__Icon} />
                    </Link>
                    <Link
                        target="_blank"
                        className={styles.Footer__IconLink}
                        href="https://www.linkedin.com/in/beka-chaduneli-28203422b/"
                    >
                        <Linkedin className={styles.Footer__Icon}  />
                    </Link>
                </div>
            </div>
        </div>
    );
}

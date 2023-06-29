import { Github, Linkedin } from "lucide-react";
import React from "react";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.FooterWrapper}>
      <div className={styles.Footer}>
        <div className={styles.Footer__TextWrapper}>
          <h1 className={styles.Footer__Text}>Powered by Beka Chaduneli</h1>
        </div>
        <div className={styles.Footer__Socials}>
          <Github className={styles.Footer__Icon} />
          <Linkedin className={styles.Footer__Icon} />
        </div>
      </div>
    </div>
  );
}

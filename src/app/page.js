import Image from "next/image";
import styles from "./page.module.scss";
import FramerText from "@/components/framerText/FramerText";

export default function Home() {
    return (
        <>
            <FramerText baseVelocity={-8}>
                <span className={styles.Text}> SPOTIFY </span>
            </FramerText>
            <FramerText baseVelocity={8}>
                <span className={styles.Text}> CLONE </span>
            </FramerText>
        </>
    );
}

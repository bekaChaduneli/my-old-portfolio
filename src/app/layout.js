import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.scss";
import "../assets/styles/main.scss";
import "./globals.css";
import Providers from "@/components/Providers/Providers";
import Loader from "@/components/loader/Loader";

export const metadata = {
    title: "Beka Chaduneli",
    description: "Portfolio of Beka Chaduneli",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Loader />
                    <span className={styles.Scroll} id="root"></span>
                    <Navbar />
                    <div className={styles.Background}>
                        <div className={styles.Background__BtnBg} />
                        <div className={styles.Background__Fade} />
                    </div>
                    <div className={styles.Content}>{children}</div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}

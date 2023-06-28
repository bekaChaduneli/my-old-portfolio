import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <Link href="/">Main</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contacts">Contact Me</Link>
        </div>
    );
}

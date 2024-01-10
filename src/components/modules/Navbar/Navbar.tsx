import Link from "next/link";
import React from "react";
import Image from 'next/image';
import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
<nav>
    <ul>
        <li>
            <Image
                src="/images/logo.svg"
                alt="Logo"
                width={150}
                height={50}
            />
        </li>
        <li>
            <Link href="/">
                Home
            </Link>
        </li>
        <li>
            <Link href="/portfolio">
                Portfolio
            </Link>
        </li>
        <li>
            <Link href="/contact">
                Contact
            </Link>
        </li>
    </ul>
</nav>
	);
}

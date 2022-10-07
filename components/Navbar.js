import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1>
          <span>D</span>eblogger
        </h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>{" "}
        </li>
        <li>
          <Link href="/about">About </Link>{" "}
        </li>
        <li>
          <Link href="/blogs"> Blogs</Link>{" "}
        </li>
        <li>
          <Link href="/contact">Contact </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

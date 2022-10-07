import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import fs from "fs";

export default function Home(props) {
  const [blogs, setblogs] = useState(props.blogData);

  return (
    <div className={styles.container}>
      <Head>
        <title>Deblogger</title>
        <meta name="description" content="The blog project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to &lt;<a href="https://nextjs.org">Deblogger</a>/&gt;
        </h1>
        <p className={styles.description}>A blog for Coders !</p>

        <h2 className={styles.latestPost}>Populer Post </h2>
        <div className={styles.grid}>
          {blogs.map((item, index) => {
            var index = index + 1;
            return (
              <Link key={index} href={`./blogposts/${item.slug}`}>
                <div className={styles.card}>
                  <h2>{item.Title}</h2>
                  <p>{item.metaDesc.slice(0, 100)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// with server site rendering
// getting only 4 blog post aas a populer one
export async function getServerSideProps(context) {
  const Blogs = await fetch("http://localhost:3000/api/blog");

  const blogData = await Blogs.json();

  const firstFourBlog = blogData.slice(0, 4);

  return {
    props: { firstFourBlog },
  };

}

// wuth static site generation
// export async function getStaticProps(context) {
//   let blogs = await fs.promises.readdir("./Blogdata");

//   var blogData = [];
//   for (let index = 0; index < 4; index++) {
//     const fileData = await fs.promises.readFile(`./Blogdata/${blogs[index]}`, "utf-8");
//     blogData = [...blogData , JSON.parse(fileData) ]
//   }


//   return {
//     props: { blogData }, // will be passed to the page component as props
//   };
// }

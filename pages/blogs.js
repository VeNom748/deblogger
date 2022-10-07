import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import blogcss from "../styles/Blogs.module.css";
import Link from "next/link";
import fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blogs = (props) => {
  const [allBlogs, setallBlogs] = useState(props.blogData);
  const [count, setcount] = useState(18)

  const fetchData = async () => {
    const data = await fetch(`http://localhost:3000/api/blog?count=${count}`);
    const jsonData = await data.json();
    
    setTimeout(() => {
      // console.log(jsonData);
      setallBlogs(jsonData);
      setcount(count + 6);
      
    }, 500);

  };

  console.log(allBlogs.msg? "false" : "true");
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* infinite scroll  */}
        <InfiniteScroll
          dataLength={allBlogs.length}
          next={fetchData}
          hasMore={allBlogs.length != props.actualLenth}
          loader={count == 12 ? "" : <h4>Loading...</h4> }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={blogcss.grid}>
            {allBlogs.map((item, index) => {
              var index = index + 1;
              return (
                <Link key={index} href={`/blogposts/${item.slug}`}>
                  <div className={styles.card}>
                    <h2>{item.Title} &nbsp; &rarr;</h2>
                    <p>{item.metaDesc?.slice(0, 100)}...</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </InfiniteScroll>
      </main>
    </div>
  );
};

// server site rendering
// this method runs in server side
export async function getServerSideProps(context) {
  let allBLogs = await fetch("http://localhost:3000/api/blog?count=6");
  let blogData = await allBLogs.json();

  return {
    props: { blogData }, // will be passed to the page component as props
  };
}

// with statis site generation
// export async function getStaticProps(context) {
//   const files = await fs.promises.readdir("./Blogdata");
  

//   let blogData = [];

//   for (let index = 0; index < files.length; index++) {
//     const fileData = await fs.promises.readFile(`./Blogdata/${files[index]}`);
//     blogData.push(JSON.parse(fileData));

//   }
//   const actualLenth = blogData.length

//   blogData = blogData.slice(0, 9)

//   return {
//     props: { blogData  , actualLenth },
//   };
// }

export default Blogs;

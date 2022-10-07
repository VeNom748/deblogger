import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import blogcss from "../../styles/Blogs.module.css";
import * as fs from "fs";

//display all data in selected blog
const Slug = (props) => {

  const [slugBlog, setslugBlog] = useState(props.parsed);

  function createMarkup() {
    return { __html: slugBlog.content};
  }
  

  // without server side rendering
  // const router = useRouter();
  // const { slug } = router.query;
  // const [slugBlog, setslugBlog] = useState({})
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`).then((blog) => {
  //     blog.json().then((data)=> {
  //       setslugBlog(data)
  //     })
  //   })
  // }, [slug])

  return (
    <div className={styles.container}>
      <main className={blogcss.main}>
        <div className={blogcss.blog_container}>
          <h1 className={blogcss.title}>{slugBlog.Title}</h1>
          <div className={blogcss.subtitle}>
            <h3>Deblogger / {slugBlog.date}</h3>
            <h3>{slugBlog.readTime} to read.</h3>
          </div>
          <hr />
          <p dangerouslySetInnerHTML={createMarkup()} ></p>
        </div>
      </main>
    </div>
  );
};



// with server side rendering
// export async function getServerSideProps(context) {
//   let slug = context.query.slug;

//   let blog = await fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`)

//   const blogData = await blog.json();

//   return {
//     props : { blogData }
//   }
// }




// with statis site generation
export async function getStaticPaths() {
  var allBlogs = await fs.promises.readdir("./Blogdata");

  // empty object
  var slugs = [];

  for (let index = 0; index < allBlogs.length; index++) {
    const blogData = await fs.promises.readFile(`Blogdata/${allBlogs[index]}` , 'utf-8');
    const jsonData = JSON.parse(blogData);

    slugs = [...slugs, { params: { slug: jsonData.slug } }]
  } 
  
  return {
    // passing data as a paths
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  };
}


export async function getStaticProps(context) {
  const { slug } = context.params;

  const blog = await fs.promises.readFile(`Blogdata/${slug}.json`, "UTF-8");

  let parsed = JSON.parse(blog);

  return {
    props: { parsed },
  };
}

export default Slug;

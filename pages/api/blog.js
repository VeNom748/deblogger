// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default async function handler(req, res) {
  

  // with async Await   
  let blogFiles = await fs.promises.readdir("Blogdata");

  let blogData = [];

  for (let index = 0; index < blogFiles.length; index++) {
    let fileData = await fs.promises.readFile(`Blogdata/${blogFiles[index]}` , "utf-8")
    blogData = [...blogData, JSON.parse(fileData)]
    // console.log(blogData)
  }

  if (blogData.length > req.query.count) {
    blogData = blogData.slice(0, req.query.count)

    return res.status(200).json(blogData);
    
  } else {
    return res.status(200).json(blogData);
  }

}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";

export default async function handler(req, res) {
  const slug = req.query.slug;

  const blog = await fs.promises.readFile(`Blogdata/${slug}.json`, "UTF-8");

  let parsed = JSON.parse(blog);
  
  return res.status(200).json(parsed);
    
}

import fs from 'fs'

export default async function handler(req , res) {
    
    if (req.method === 'POST') {
        console.log(req.body);
        const initialData = await fs.promises.readFile('contactForms/contact.json', 'utf-8');
        const parsedData = JSON.parse(initialData);
        const updatedData = [...parsedData , req.body]

        fs.writeFile("contactForms/contact.json", JSON.stringify(updatedData), (err) => {
             console.log(err)
             console.log("File Saved")
        })
        
         return res.status(200).json({"msg":"Msg sent succesfuly"})
    }
}
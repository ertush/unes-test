import  * as converter  from "json-2-csv"
import fs, { write } from "fs";
import path from "path";
// import { Readable } from "stream"

export async function GET() {

    const credentials = Buffer.from("programmingtest:Kenya@2040").toString("base64")


    const filePath = path.join(__dirname, 'analytics.csv');

    const writeStream = fs.createWriteStream(filePath);

    try {
       const json: any = await fetch(
            `${process.env.KHIS_API_URL}`,
             {
                headers: {
                    "Content-type": 'application/json',
                    "Authorization": `Basic ${credentials}`    

                }
            })

            const result = await json.json()

            const csv = converter.json2csv(result?.rows)

            const  written = writeStream.write(csv)



        

            return new Response(JSON.stringify({
                written,
                path: writeStream.path
            }))
    } catch (e: any) {
        console.error(e.message)
    }
}
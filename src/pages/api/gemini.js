export const prerender = false; // for making it server-side
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path'; 
import sharp from "sharp";



export const post = async ({ request }) => {
  try {
    const body = await request.json();
    const prompt = body?.prompt || ''; 

    const ai = new GoogleGenAI({ apiKey: import.meta.env.GEMINI_API_KEY })

    // const instruction = `Generate a single illustration of ${prompt} for a biology book. The illustration should be a icon with style on black silloutes with ocasional flat grey areas when needed. It shoulb be extremely scientifiquely accurate, realistic and detailed, based on the caracteristics of each species, and representative if it's a class or family. The illustration should be designed to be display in a 100x100 px div without text. Generate an illustracion of ${prompt}`;
    const instruction = `Generate a single illustration of ${prompt} for a biology book. The illustration should be a icon in black and white, just the animal. It shoulb be extremely scientifiquely accurate, realistic and detailed, based on the caracteristics of each species, and representative if it's a class or family. The illustration should be designed to be display in a 100x100 px div without text. Generate an illustracion of ${prompt}`;


    const templatePaths = [
      // "./src/assets/ref_imgs/Alpenapollo.png",
      // "./src/assets/ref_imgs/Culiseta alaskaensis.png",
      // "./src/assets/ref_imgs/Riesenbockkäfer.png",
      // "https://www.familiengarten-tipps.de/wp-content/uploads/2024/09/regenwurm-borsten-1024x426.jpg"
    ];

    async function loadImageBuffer(p) {
      if (/^https?:\/\//.test(p)) {
        // It's a URL
        const res = await fetch(p);
        if (!res.ok) throw new Error(`Failed to fetch image: ${p}`);
        return Buffer.from(await res.arrayBuffer());
      } else {
        // It's a local path
        const resolvedPath = path.resolve(p);
        return fs.readFileSync(resolvedPath);
      }
    }

    const templateImages = await Promise.all(
      templatePaths.map(async p => {
        const buffer = await loadImageBuffer(p);
        const resized = await sharp(buffer)
          .resize({ width: 512, withoutEnlargement: true })
          .png()
          .toBuffer();

        const base64 = resized.toString("base64");
        return {
          inlineData: {
            mimeType: "image/png",
            data: base64
          }
        };
      })
    );

    const contents = [
      { text: instruction},
      ...templateImages
   ];

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: contents,
      // generationConfig: {
      //       candidateCount: 4,
      // },
      // response_modalities: ["image"]
    })
    return new Response(JSON.stringify({ reply: response.candidates[0].content.parts }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    console.error(err); // log actual error in terminal
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
};

export const POST = post;

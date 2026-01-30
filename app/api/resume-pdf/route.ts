import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const pdfPath = path.join(process.cwd(), "public", "yashyegare-resume.pdf");
    
    // Use async readFile
    const fileBuffer = await fs.readFile(pdfPath);

    // Return a standard Response object
    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="yashyegare-resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return new Response(JSON.stringify({ error: "Failed to serve PDF" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
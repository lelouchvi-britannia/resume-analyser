import pdfParse from "pdf-parse";

export const parseResume = async (file) => {
  let text = "";

  if (file.mimetype === "application/pdf") {
    const data = await pdfParse(file.buffer);
    text = data.text;
  } else {
    text = file.buffer.toString("utf-8"); // fallback for txt/docx
  }

  // Very basic extraction (mock for hackathon)
  const skills = text.match(/React|Node|MongoDB|JavaScript|Python/gi) || [];
  const projects = text.match(/Project\s+\w+/gi) || [];
  const suggestions = ["Add more action verbs", "Highlight measurable impact"];

  return { text, skills, projects, suggestions };
};
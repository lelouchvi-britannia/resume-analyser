import { parseResume } from "../services/parserService.js";
import { calculateScore } from "../services/scoringService.js";
import { generateSummary } from "../services/summaryService.js";
import { compareWithJob } from "../services/comparisonService.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const parsedData = await parseResume(req.file);

    const score = calculateScore(parsedData);

    const summary = generateSummary(parsedData);

    const missingSkills = compareWithJob(parsedData, "Software Engineer");

    res.json({
      score,
      summary,
      skills: parsedData.skills,
      projects: parsedData.projects,
      suggestions: parsedData.suggestions,
      missingSkills,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
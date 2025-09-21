export const calculateScore = (parsedData) => {
  let score = 5; // base
  if (parsedData.skills.length > 5) score += 2;
  if (parsedData.projects.length > 1) score += 2;
  return Math.min(score, 10);
};
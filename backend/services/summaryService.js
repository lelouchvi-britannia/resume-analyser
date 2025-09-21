export const generateSummary = (parsedData) => {
  return `A results-driven candidate skilled in ${parsedData.skills.slice(0,3).join(", ")} with experience in impactful projects.`;
};
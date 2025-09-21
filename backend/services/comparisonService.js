export const compareWithJob = (parsedData, jobTitle) => {
  const jobSkills = ["React", "Node", "MongoDB", "Express", "AWS"]; // mock job profile
  return jobSkills.filter(skill => !parsedData.skills.includes(skill));
};
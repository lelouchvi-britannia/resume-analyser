import axios from "axios";

const API_URL = "http://localhost:5000/api/resume";

export const analyzeResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  const res = await axios.post(`${API_URL}/analyze`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};
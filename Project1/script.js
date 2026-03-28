// ─── ATS RESUME ANALYZER — app.js ───────────────────────────────────────────
// ── Round 1: Variables ──────────────────────────────────────────────────────
const fields = ["experience", "education", "skills", "projects"];
const maxScore = 100;
let atsScore = 0;
let resumeText = "";

// ── Round 2: Arrow Functions ────────────────────────────────────────────────
const getScoreLabel = (score) => {
  if (score >= 80) return "Strong";
  else if (score >= 60) return "Moderate";
  else return "Weak";
};
// ── Round 3: .filter() ──────────────────────────────────────────────────────
const getMissingFields = (text, fieldList) =>
  fieldList.filter((field) => !text.includes(field));

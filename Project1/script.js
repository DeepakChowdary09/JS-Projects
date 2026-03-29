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

// ── Round 4: .map() + Template Literals ─────────────────────────────────────
const formatWarnings = (missingFields) =>
  missingFields.map((field) => `⚠️ Missing: ${field}`);

// ── Round 5: .reduce() + Object.values() ────────────────────────────────────
const getAverageScore = (obj) => {
  const values = Object.values(obj);
  return values.reduce((acc, n) => acc + n, 0) / values.length;
};


// ── Round 6: Destructuring ──────────────────────────────────────────────────
const buildResult = (analysisObj, text) => {
  const score = getAverageScore(analysisObj);
  const { keywords, formatting, sections, readability } = analysisObj;
  return {
    score, label: getScoreLabel(score),
    breakdown: { keywords, formatting, sections, readability },
    warnings: formatWarnings(getMissingFields(text, fields))
  };
};


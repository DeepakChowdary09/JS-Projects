─ ATS RESUME ANALYZER —
// Round 1: Variables 
const fields = ["experience", "education", "skills", "projects"];
const maxScore = 100;
let atsScore = 0;
let resumeText = "";

// ── Round 2: Arrow Functions 
const getScoreLabel = (score) => {
  if (score >= 80) return "Strong";
  else if (score >= 60) return "Moderate";
  else return "Weak";
};
//  Round 3: .filter() 
const getMissingFields = (text, fieldList) =>
  fieldList.filter((field) => !text.includes(field));

//  Round 4: .map() + Template Literals 
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

          // ── Round 7: Spread ──────────────────────────────────────────────────────────
const updateResult = (existing, updates) => ({ ...existing, ...updates });

      // ── Round 8: Optional Chaining + Nullish Coalescing ─────────────────────────
const safeGetScore = (result) => result?.score ?? 0;
const safeGetLabel = (result) => result?.label ?? "No score yet";



  // ── Round 9: Object.entries() ───────────────────────────────────────────────
const formatBreakdown = (breakdown) =>
  Object.entries(breakdown).map(([k, v]) => `${k}: ${v}/100`);
  };
};

  
// ── Round 10: Closure ────────────────────────────────────────────────────────
const createScoreTracker = () => {
  let history = [];
  return {
    save: (score) => { history = [score, ...history].slice(0, 5); },
    getAll: () => [...history],
    clear: () => { history = []; }
  };
};
const tracker = createScoreTracker();

// ── Round 11: Async/Await + try/catch ───────────────────────────────────────
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const getAISuggestion = async (score) => {
  try {
    await delay(1000);
    if (score >= 80) return "✅ Strong ATS match! Focus on polish.";
    if (score >= 60) return "📈 Good base. Add job-specific keywords.";
    return "⚠️ Low score. Tailor resume to this JD.";
  } catch (err) {
    console.error("AI failed:", err?.message ?? "Unknown error");
    return null;
  } finally {
    console.log("AI request complete");
  }
};

    // ── Round 12: DOM + localStorage + JSON ─────────────────────────────────────
const displayResult = (result) => {
  const { score, label, warnings, breakdown } = result;
  document.getElementById("result").textContent = Math.round(score);
  document.getElementById("label").textContent = label;
  document.getElementById("warnings").innerHTML =
    warnings.map((w) => `<p>${w}</p>`).join("");
  document.getElementById("breakdown").innerHTML =
    formatBreakdown(breakdown).map((b) => `<p>${b}</p>`).join("");
  localStorage.setItem("lastResult", JSON.stringify(result));
  tracker.save(score);
};

const loadSavedResult = () => {
  const saved = localStorage.getItem("lastResult");
  if (saved) displayResult(JSON.parse(saved));
};
    console.log("AI request complete");
  }
};


// ── MAIN ─────────────────────────────────────────────────────────────────────
const analyzeResume = async () => {
  const input = document.getElementById("resume-input")?.value ?? "";
  if (!input.trim()) return;

  const analysisObj = {
    keywords:    input.includes("react") || input.includes("javascript") ? 80 : 40,
    formatting:  input.length > 200 ? 75 : 50,
    sections:    fields.filter((f) => input.includes(f)).length * 25,
    readability: input.includes("responsible for") ? 40 : 70
  };

   const result = buildResult(analysisObj, input);
  const { score } = result;
  displayResult(result);

  const suggestion = await getAISuggestion(score);
  if (suggestion) document.getElementById("suggestion").textContent = suggestion;
};

// ── Wire up button ────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadSavedResult();
  document.getElementById("analyze-btn")?.addEventListener("click", analyzeResume);
});




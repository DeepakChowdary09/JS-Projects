const fields = ["experience", "education","skills", "projects"];
const maxScore =100;
let atsScore =0;
let resumeText ;

   const  getScoreLabel=(score)=>{
    if(score >=80) return "Strong";
    else if (score >=60) return "Moderate";
    else  return "Weak";
    };
   
  

// One-liner version (ternary):
         // const     getScoreLabel =(score)>
         //      score >=80?"Strong" :score>=60?"Moderate":"Weak";





 resumeText = "I have experience in React and strong education";
const getMissingFields = (resumeText, fields) =>
  fields.filter((field) => !resumeText.includes(field));

console.log(getMissingFields(resumeText, fields));

const missingFields = ["skills", "projects"];

const formatWarnings =(missingFields) =>
   missingFields.map((field) => ` Missing : ${field}`);
console.log(formatWarnings(missingFields));



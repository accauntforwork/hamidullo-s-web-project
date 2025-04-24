// src/utils/parseQuiz.js
function parseQuizText(text) {
  const questions = text
    .split("++++")
    .map((block) => {
      const lines = block
        .trim()
        .split("====")
        .map((l) => l.trim())
        .filter(Boolean);
      if (lines.length < 2) return null;

      const question = lines[0];
      const options = lines.slice(1).map((opt) => opt.replace(/^#/, ""));
      const correct = lines
        .slice(1)
        .find((opt) => opt.startsWith("#"))
        .replace(/^#/, "");

      return {
        question,
        options,
        correctAnswer: correct,
      };
    })
    .filter(Boolean);

  return questions;
}

export default parseQuizText;

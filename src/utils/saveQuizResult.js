export function saveQuizResult(topic, correct, total) {
  const existing = JSON.parse(localStorage.getItem("quizResults") || "{}");
  const today = new Date().toISOString().split("T")[0];
  const newResult = { correct, total, date: today };

  if (!existing[topic]) {
    existing[topic] = [];
  }

  existing[topic].push(newResult);
  localStorage.setItem("quizResults", JSON.stringify(existing));
}

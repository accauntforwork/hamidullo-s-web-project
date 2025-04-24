// src/utils/getStatistics.js

export function getQuizStats() {
  const data = JSON.parse(localStorage.getItem("quizResults") || "{}");
  const topics = Object.keys(data);
  let total = 0,
    correct = 0,
    incorrect = 0;
  const perTopic = [];

  topics.forEach((topic) => {
    const results = data[topic];
    results.forEach((res) => {
      total++;
      correct += res.correct;
      incorrect += res.total - res.correct;
    });

    perTopic.push({
      topic,
      count: results.length,
      lastDate: results[results.length - 1]?.date,
    });
  });

  return { total, correct, incorrect, perTopic };
}

export function getVideoStats() {
  const data = JSON.parse(localStorage.getItem("videoNotes") || "{}");
  const seenVideos = Object.keys(data);
  const noteCount = seenVideos.reduce(
    (acc, key) => acc + (data[key]?.note ? 1 : 0),
    0
  );

  return {
    totalVideos: seenVideos.length,
    totalNotes: noteCount,
    videos: seenVideos,
  };
}

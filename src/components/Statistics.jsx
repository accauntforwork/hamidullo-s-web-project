// src/pages/Statistika.jsx
import React, { useEffect, useState } from 'react';

const courseList = ['html', 'js', 'react'];

const Statistika = () => {
  const [quizStats, setQuizStats] = useState({});
  const [videoStats, setVideoStats] = useState({});
  const [noteStats, setNoteStats] = useState({});

  useEffect(() => {
    const newQuizStats = {};
    const newVideoStats = {};
    const newNoteStats = {};

    courseList.forEach(course => {
      const quizData = localStorage.getItem(`quiz-${course}`);
      if (quizData) {
        newQuizStats[course] = JSON.parse(quizData);
      }

      let videoCount = 0;
      let noteCount = 0;
      for (let key in localStorage) {
        if (key.startsWith(`${course}-video-`) && key.endsWith('-notes')) {
          noteCount++;
        }
        if (key.startsWith(`${course}-video-`) && !key.endsWith('-notes')) {
          videoCount++;
        }
      }

      newVideoStats[course] = videoCount;
      newNoteStats[course] = noteCount;
    });

    setQuizStats(newQuizStats);
    setVideoStats(newVideoStats);
    setNoteStats(newNoteStats);
  }, []);

  const getProgress = (correct, total) => {
    if (!total || total === 0) return 0;
    return Math.round((correct / total) * 100);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Statistika</h2>
      {courseList.map(course => (
        <div key={course} className="mb-6 bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold capitalize text-blue-600 mb-2">{course} kursi</h3>

          {/* Quiz natijalari */}
          {quizStats[course] ? (
            <>
              <p>✅ To‘g‘ri javob: {quizStats[course].correct} / {quizStats[course].total}</p>
              <p>📅 Sana: {quizStats[course].date}</p>
              <div className="w-full bg-gray-200 rounded-full h-4 my-2">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${getProgress(quizStats[course].correct, quizStats[course].total)}%` }}
                ></div>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Test ishlanmagan</p>
          )}

          {/* Video va qaydlar statistikasi */}
          <p>🎬 Ko‘rilgan videolar: {videoStats[course] || 0}</p>
          <p>📝 Qaydlar soni: {noteStats[course] || 0}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistika;

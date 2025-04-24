import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parseQuizText from "../utils/parseQuiz";
import quizFiles from "../data/quizFiles";

const QuizPage = () => {
  const { courseId } = useParams();
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const loadQuiz = async () => {
      const filePath = quizFiles[courseId];
      if (!filePath) {
        console.error("Quiz file not found");
        return;
      }

      const response = await fetch(filePath);
      const text = await response.text();
      const parsed = parseQuizText(text);
      setQuizData(parsed);
    };

    loadQuiz();
  }, [courseId]);

  const handleOptionSelect = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    const current = quizData[currentQuestion];
    if (selected && current.correctAnswer === selected) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      const correct =
        selected && quizData[currentQuestion].correctAnswer === selected
          ? score + 1
          : score;
      setScore(correct);
      setIsFinished(true);
      saveStats(correct, quizData.length);
    }
  };

  const saveStats = (correct, total) => {
    const key = `quiz-${courseId}`;
    const date = new Date().toISOString().split("T")[0];

    const stats = {
      correct,
      total,
      date,
    };
    localStorage.setItem(key, JSON.stringify(stats));
  };

  if (quizData.length === 0) return <p className="p-4">Yuklanmoqda...</p>;

  if (isFinished) {
    return (
      <div className="p-4 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Test Yakunlandi</h2>
        <p className="text-lg text-green-600">
          To‘g‘ri javoblar: {score} / {quizData.length}
        </p>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-2">
        Savol {currentQuestion + 1} / {quizData.length}
      </h2>
      <p className="mb-4">{question.question}</p>
      <ul className="mb-4">
        {question.options.map((opt, index) => (
          <li key={index}>
            <button
              className={`block w-full text-left p-2 border rounded mb-2 hover:bg-blue-100 ${
                selected === opt ? "bg-blue-200" : ""
              }`}
              onClick={() => handleOptionSelect(opt)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleNext}
        disabled={!selected}
      >
        {currentQuestion + 1 === quizData.length ? "Yakunlash" : "Keyingi"}
      </button>
    </div>
  );
};

export default QuizPage;

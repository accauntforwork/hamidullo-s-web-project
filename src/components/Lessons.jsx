// components/Lessons.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("/lessons/lessons.txt")
      .then((res) => res.text())
      .then((text) => {
        const lessonTitles = text
          .split("\n")
          .filter(
            (line) => line.startsWith("DARS") || line.match(/^\d+-DARS/i)
          );
        const parsed = lessonTitles.map((title, index) => ({
          id: index + 1,
          title: title.trim(),
        }));
        setLessons(parsed);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Elektron darslik</h2>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link
              to={`/lessons/${lesson.id}`}
              className="text-blue-600 hover:underline"
            >
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lessons;

// // components/Lessons.jsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Lessons() {
//   const [lessons, setLessons] = useState([]);

//   useEffect(() => {
//     fetch("/lessons/lessons.txt")
//       .then((res) => res.text())
//       .then((text) => {
//         const lessonTitles = text
//           .split("\n")
//           .filter(
//             (line) => line.startsWith("DARS") || line.match(/^\d+-DARS/i)
//           );
//         const parsed = lessonTitles.map((title, index) => ({
//           id: index + 1,
//           title: title.trim(),
//         }));
//         setLessons(parsed);
//       });
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Elektron darslik</h2>
//       <ul className="space-y-2">
//         {lessons.map((lesson) => (
//           <li key={lesson.id}>
//             <Link
//               to={`/lessons/${lesson.id}`}
//               className="text-blue-600 hover:underline"
//             >
//               {lesson.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Lessons;

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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📘 Elektron darsliklar ro'yxati
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link
              to={`/lessons/${lesson.id}`}
              className="block w-full text-left bg-white hover:bg-blue-50 border border-blue-200 text-blue-700 font-medium px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-300"
            >
              📖 {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lessons;

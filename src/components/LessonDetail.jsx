import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function LessonDetail() {
  const { id } = useParams();
  const [lesson, setLesson] = useState({
    title: "",
    content: "",
    questions: "",
    homework: "",
  });
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [homeworkAnswer, setHomeworkAnswer] = useState("");

  // LocalStorage kalitlari
  const questionKey = `lesson_${id}_questions`;
  const homeworkKey = `lesson_${id}_homework`;

  useEffect(() => {
    fetch("/lessons/lessons.txt")
      .then((res) => res.text())
      .then((text) => {
        const lessonsRaw = text.split(/\n(?=\d+-DARS|\d+ - DARS)/g); // Har bir darsni ajratamiz
        const selectedRaw = lessonsRaw.find((l) => l.startsWith(`${id}-DARS`));
        if (selectedRaw) {
          const [titleLine, ...rest] = selectedRaw.trim().split("\n");
          const joined = rest.join("\n");

          const [contentPart, questionsPart = "", homeworkPart = ""] = joined
            .split(/SAVOL VA TOPSHIRIQLAR|SAYOL VA TOPSHIRIQLAR/)
            .map((part) => part.trim());

          const [questionsText = "", homeworkText = ""] = questionsPart
            .split(/UYGA VAZIFA|UYGAVAZIFA/)
            .map((part) => part.trim());

          setLesson({
            title: titleLine.trim(),
            content: contentPart.trim(),
            questions: questionsText,
            homework: homeworkText || homeworkPart,
          });

          // Oldingi javoblarni o‘qib olamiz
          setQuestionAnswer(localStorage.getItem(questionKey) || "");
          setHomeworkAnswer(localStorage.getItem(homeworkKey) || "");
        }
      });
  }, [id]);

  const handleQuestionChange = (e) => {
    const value = e.target.value;
    setQuestionAnswer(value);
    localStorage.setItem(questionKey, value);
  };

  const handleHomeworkChange = (e) => {
    const value = e.target.value;
    setHomeworkAnswer(value);
    localStorage.setItem(homeworkKey, value);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{lesson.title}</h2>

      <div className="mb-6 whitespace-pre-line">{lesson.content}</div>

      {lesson.questions && (
        <div className="mb-6">
          <details className="mb-2">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Nazorat savollari
            </summary>
            <div className="mt-2 whitespace-pre-line">{lesson.questions}</div>

            <textarea
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              rows={5}
              placeholder="Javoblaringizni shu yerga yozing..."
              value={questionAnswer}
              onChange={handleQuestionChange}
            ></textarea>
          </details>
        </div>
      )}

      {lesson.homework && (
        <div className="mb-6">
          <details>
            <summary className="cursor-pointer font-semibold text-blue-600">
              Uyga vazifa
            </summary>
            <div className="mt-2 whitespace-pre-line">{lesson.homework}</div>

            <textarea
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              rows={5}
              placeholder="Uyga vazifa uchun javobingizni yozing..."
              value={homeworkAnswer}
              onChange={handleHomeworkChange}
            ></textarea>
          </details>
        </div>
      )}
    </div>
  );
}

export default LessonDetail;

// // components/LessonDetail.jsx
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function LessonDetail() {
//   const { id } = useParams();
//   const [lesson, setLesson] = useState(null);

//   useEffect(() => {
//     fetch("/lessons/lessons.txt")
//       .then((res) => res.text())
//       .then((text) => {
//         const lessons = text.split(/\n(?=\d+-DARS|\d+\-DARS)/).filter(Boolean);
//         const selected = lessons[parseInt(id) - 1];
//         if (selected) {
//           const [titleLine, ...rest] = selected.trim().split("\n");
//           const content = rest.join("\n");

//           const [lecture, controlPart] = content.split(
//             /SAVOL VA TOPSHIRIQLAR/i
//           );
//           const [questionsPart, homeworkPartRaw] = (controlPart || "").split(
//             /UYGA VAZIFA/i
//           );
//           const homework = homeworkPartRaw ? homeworkPartRaw.trim() : "";
//           const questions = questionsPart ? questionsPart.trim() : "";

//           setLesson({
//             title: titleLine,
//             lecture: lecture.trim(),
//             questions,
//             homework,
//           });
//         }
//       });
//   }, [id]);

//   if (!lesson) return <div className="p-6">Yuklanmoqda...</div>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
//       <p className="mb-4 whitespace-pre-line">{lesson.lecture}</p>

//       <details className="mb-4">
//         <summary className="font-semibold cursor-pointer text-blue-600">
//           Nazorat savollari
//         </summary>
//         <p className="mt-2 whitespace-pre-line">{lesson.questions}</p>
//       </details>

//       <details>
//         <summary className="font-semibold cursor-pointer text-blue-600">
//           Uyga vazifa
//         </summary>
//         <p className="mt-2 whitespace-pre-line">{lesson.homework}</p>
//       </details>
//     </div>
//   );
// }

// export default LessonDetail;

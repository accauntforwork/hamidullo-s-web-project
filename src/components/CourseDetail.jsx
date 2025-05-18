// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// function CourseDetail() {
//   const { courseId } = useParams();
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetch("/data/videos.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setVideos(data[courseId] || []);
//       });
//   }, [courseId]);

//   if (!videos.length)
//     return <p className="p-6">Kurs topilmadi yoki videolar mavjud emas</p>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">
//         📚 {courseId.toUpperCase()} Kursi
//       </h2>
//       <ul className="space-y-3">
//         {videos.map((v) => (
//           <li key={v.id}>
//             <Link
//               to={`/courses/${courseId}/video/${v.id}`}
//               className="text-blue-600 hover:underline"
//             >
//               🎥 {v.title}
//             </Link>
//             <Link
//               to={`/quiz/${courseId}`}
//               className="block mt-6 text-blue-500 underline"
//             >
//               📊 Testni ishlash
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CourseDetail;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CourseDetail() {
  const { courseId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/data/videos.json")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data[courseId] || []);
      });
  }, [courseId]);

  if (!videos.length)
    return (
      <p className="p-6 text-red-600 font-semibold">
        Kurs topilmadi yoki videolar mavjud emas
      </p>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        📚 {courseId.toUpperCase()} Kursi
      </h2>
      <ul className="space-y-4">
        {videos.map((v) => (
          <li key={v.id}>
            <Link
              to={`/courses/${courseId}/video/${v.id}`}
              className="block w-full text-left bg-white hover:bg-blue-50 border border-blue-200 text-blue-700 font-medium px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-300"
            >
              🎥 {v.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <Link
          to={`/quiz/${courseId}`}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          📊 Testni ishlash
        </Link>
      </div>
    </div>
  );
}

export default CourseDetail;

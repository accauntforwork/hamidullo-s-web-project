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
    return <p className="p-6">Kurs topilmadi yoki videolar mavjud emas</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        📚 {courseId.toUpperCase()} Kursi
      </h2>
      <ul className="space-y-3">
        {videos.map((v) => (
          <li key={v.id}>
            <Link
              to={`/courses/${courseId}/video/${v.id}`}
              className="text-blue-600 hover:underline"
            >
              🎥 {v.title}
            </Link>
            <Link
              to={`/quiz/${courseId}`}
              className="block mt-6 text-blue-500 underline"
            >
              📊 Testni ishlash
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetail;

import { Link } from "react-router-dom";

const courseList = [
  {
    id: "html",
    title: "HTML & CSS",
    description: "Boshlang‘ich darajadagi kurs",
  },
  { id: "js", title: "JavaScript", description: "O‘rta darajadagi kurs" },
  { id: "react", title: "ReactJS", description: "Ilg‘or darajadagi kurs" },
];

function Courses() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Mavjud Kurslar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courseList.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="bg-white p-4 rounded shadow hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold text-blue-600">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;

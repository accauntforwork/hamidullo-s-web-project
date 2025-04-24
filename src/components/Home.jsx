import { Link } from "react-router-dom";

export default function Home() {
  const courses = [
    {
      id: "html",
      title: "HTML & CSS",
      description: "Boshlang‘ich darajadagi veb-sahifa tuzishni o‘rganing.",
      image: "/images/htmlcss.png",
    },
    {
      id: "js",
      title: "JavaScript",
      description: "Dinamik sahifalar yaratish uchun JSni chuqur o‘rganing.",
      image: "/images/js.png",
    },
    {
      id: "react",
      title: "ReactJS",
      description: "Ilg‘or web ilovalarni yaratishni o‘rganing.",
      image: "/images/react.png",
    },
  ];

  return (
    <div className="p-6 space-y-16">
      {/* Sarlavha */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          WebDev Learning Hub
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Kasbiy ta’lim uchun web dasturlash bo‘yicha interaktiv kurslar,
          testlar va video darslar.
        </p>
      </div>

      {/* Kurslar */}
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link
                to={`/courses/${course.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Kursga o'tish
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Reklama */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">
          📣 Yangi Kurslar Qo‘shilmoqda!
        </h3>
        <p className="text-lg mb-4">
          Har hafta yangi mavzular va amaliy mashg‘ulotlar!
        </p>
        <Link
          to="/courses"
          className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100"
        >
          Barcha kurslarni ko‘rish
        </Link>
      </div>

      {/* Kurs afzalliklari */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          💡 Nima uchun bizni tanlaysiz?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Amaliy yondashuv
            </h3>
            <p className="text-gray-600">
              Har bir kursda real amaliy topshiriqlar, testlar va kodlash
              vazifalari mavjud.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Shaxsiy rivojlanish
            </h3>
            <p className="text-gray-600">
              Har bir foydalanuvchi o‘z statistikasi orqali rivojlanishini
              kuzatadi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Bepul ta’lim
            </h3>
            <p className="text-gray-600">
              Barcha kontent – darslar, testlar va materiallar bepul va ochiq.
            </p>
          </div>
        </div>
      </div>

      {/* Foydalanuvchi fikrlari */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🗣 Foydalanuvchi fikrlari
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="italic text-gray-700">
              “Kurslar juda sodda va tushunarli. Testlar orqali o‘zimni sinab
              ko‘ra oldim!”
            </p>
            <p className="text-right mt-4 text-blue-500 font-semibold">
              — Nodira, talaba
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="italic text-gray-700">
              “Video darslar va qayd yozuvlari funksiyasi men uchun juda qulay
              bo‘ldi.”
            </p>
            <p className="text-right mt-4 text-blue-500 font-semibold">
              — Javohir, frontend o‘rganuvchisi
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ❓ Tez-tez so‘raladigan savollar
        </h2>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Kurslar uchun ro‘yxatdan o‘tish kerakmi?
            </summary>
            <p className="mt-2 text-gray-600">
              Ha albatta, faqat ro‘yxatdan o‘tgandan foydalanuvchilargina
              kurslardan foydalanishingiz mumkin.
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Kurslar mutlaqo bepulmi?
            </summary>
            <p className="mt-2 text-gray-600">
              Yo'q, barcha kontentlar yuqori darajada bo'lganligi uchun faqat
              pulli asosda taqdim etiladi.
            </p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Qayd yozuvlarim qayerda saqlanadi?
            </summary>
            <p className="mt-2 text-gray-600">
              Havotir olmang qaydlaringizni hech kim o'qimaydi. Qaydlaringiz
              brauzeringizning LocalStorage tizimida saqlanadi va faqat siz
              uchun mavjud.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

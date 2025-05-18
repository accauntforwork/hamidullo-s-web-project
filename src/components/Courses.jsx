// import { Link } from "react-router-dom";

// const courseList = [
//   {
//     id: "html",
//     title: "HTML & CSS",
//     description: "Boshlang‘ich darajadagi kurs",
//   },
//   { id: "js", title: "JavaScript", description: "O‘rta darajadagi kurs" },
//   { id: "react", title: "ReactJS", description: "Ilg‘or darajadagi kurs" },
// ];

// function Courses() {
//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Mavjud Kurslar</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {courseList.map((course) => (
//           <Link
//             to={`/courses/${course.id}`}
//             key={course.id}
//             className="bg-white p-4 rounded shadow hover:bg-gray-100"
//           >
//             <h3 className="text-lg font-semibold text-blue-600">
//               {course.title}
//             </h3>
//             <p className="text-gray-600">{course.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;

import { Link } from "react-router-dom";

const courseList = [
  {
    id: "html",
    title: "HTML & CSS",
    description: "Boshlang‘ich darajadagi kurs",
    lessonScript: `Assalomu alaykum, azizlar! Bugun biz HTMLga, ya'ni web-sahifalarni yaratishning asosiga birinchi qadam qo'yamiz. HTML degani nima, u qanday ishlaydi va nega u web-dasturchilar uchun muhim — shu savollarga javob topamiz.

Avvalo, HTML so'zi ingliz tilidagi “HyperText Markup Language” iborasining qisqartmasi. Bu til veb-brauzerlarga sahifada nima ko‘rsatish kerakligini aytadigan til. Siz internetda ko‘rayotgan har qanday sahifa, maqola, tugma yoki rasm — bularning barchasi HTML orqali yaratilgan.

HTML bu dasturlash tili emas, u belgilar tili — ya’ni markup language. U bizga matn, rasm, video va boshqa elementlarni qanday joylashtirish kerakligini bildiradi. Masalan, matnni paragraf qilish uchun <p> tegi, sarlavha qilish uchun esa <h1> dan <h6> gacha bo‘lgan teglar ishlatiladi.

Qanday qilib HTML fayl yaratiladi? Juda oddiy. Kompyuteringizda Notepad yoki boshqa matn muharririni ochasiz va kod yozishni boshlaysiz. Faylni .html kengaytmada saqlaysiz, masalan index.html. So‘ngra uni brauzerda ochsangiz, siz yozgan matnni ko‘rasiz.

HTMLda har bir tegi ikki qismdan iborat: ochuvchi va yopuvchi. Masalan, <p> bu ochuvchi teg, </p> esa yopuvchi teg. Bu HTMLga: “Mana bu matn paragraf bo‘ladi,” degan buyruqni beradi. Har doim ochilgan tegni yopishni unutmang.

HTML oddiy ko‘rinishi mumkin, lekin u veb-dizaynning eng asosiy poydevori hisoblanadi. Bu bilimlar orqali siz keyinchalik CSS va JavaScript kabi texnologiyalarni ham oson tushunib olasiz.

Bugungi darsimiz aynan shu — HTML bilan tanishish edi. Keyingi videoda biz amaliy mashq qilamiz, ya'ni birinchi web-sahifamizni yozamiz. Siz ham dars davomida o‘z kompyuteringizda men bilan birga kod yozishga harakat qiling.`,
  },
  {
    id: "js",
    title: "JavaScript",
    description: "O‘rta darajadagi kurs",
    lessonScript: `Assalomu alaykum! Yaxshimisiz? Bugun biz JavaScript olamiga birinchi qadamingizni qo‘yamiz. Balki eshitgandirsiz, JavaScript bu — web saytlarni jonlantiradigan kuch. Agar HTML saytning tanasi bo‘lsa, CSS uning ko‘rinishi bo‘lsa, JavaScript esa — ruhidir. U foydalanuvchi bilan aloqada bo‘ladigan, harakatga keltiradigan til.

JavaScriptni o‘rganish orqali siz tugmalarni bosganda qandaydir amal bajarish, sahifada avtomatik o‘zgarishlar qilish yoki foydalanuvchi ma'lumotini qayta ishlash kabi ko‘plab interaktiv funksiyalarni yarata olasiz. Asosiysi, bu tilni o‘rganish sizga haqiqiy web dasturchi bo‘lish yo‘lini ochadi. Va eng yaxshi tomoni — JavaScriptni o‘rganish uchun sizda faqatgina oddiy brauzer va matn muharriri bo‘lsa kifoya.

Bugungi darsimizda biz JavaScript nima ekanini tushunamiz va eng birinchi kodimizni yozamiz. Juda oddiy kod bo‘ladi, lekin bu kod orqali siz birinchi marta kompyuterga: "Ey, buni qil!" — deb buyruq berasiz. Va bu hissiyot, ishoning, juda ajoyib. Chunki o‘sha birinchi marta “console.log("Salom, JavaScript!")” deb yozganingizda, siz endi kod yozadigan odamga aylanasiz.

JavaScriptni o‘rganish davomida siz ko‘p yangiliklarga duch kelasiz. Avvaliga bu sizni biroz charchatishi mumkin, lekin har bir kichik tushuncha sizni katta bir qurilish tomon olib boradi. Siz har safar yangi kod yozganingizda o‘zingizni bir oz kuchliroq his qilasiz. Har safar tushunganingizda, “Voy, bu aslida oddiymi?” degan fikr paydo bo‘ladi.

Men siz bilan birga bo‘laman, birgalikda o‘rganamiz. Har bir mavzuni hayotiy, oddiy va tushunarli qilib tushuntirishga harakat qilaman. Sizdan faqat sabr va qiziqish talab qilinadi. O‘zingizni hech qachon “menga qiyin” deb o‘ylamang. JavaScript — bu mantiq. Mantiq esa asta-sekinlik bilan shakllanadi.

Yaxshi, unda boshladik! Brauzerni oching, matn muharririni tayyorlang va birinchi kodingizni yozishga tayyorlaning. Esingizda bo‘lsin, bu yo‘lning boshlanishi. Katta dasturchilik yo‘lining eng birinchi qadami. Omad sizga yor bo‘lsin!`,
  },
  {
    id: "react",
    title: "ReactJS",
    description: "Ilg‘or darajadagi kurs",
    lessonScript: `Assalomu alaykum! ReactJS kursimizga xush kelibsiz. Agar siz HTML, CSS, va JavaScript bilan tanish bo‘lsangiz, unda bu texnologiyani o‘rganish vaqti keldi. React — bu Facebook tomonidan yaratilgan, dunyodagi eng mashhur frontend kutubxonasi. U bizga murakkab va tez ishlaydigan web ilovalarni sodda va tartibli tarzda yaratishga yordam beradi.

Dasturchilik yo‘lida bir bosqich keladiki, oddiy HTML sahifalar yetarli bo‘lmay qoladi. Ayniqsa siz foydalanuvchi bilan interaktiv bo‘lgan, tez ishlaydigan va ko‘p sahifali saytlar yaratmoqchi bo‘lsangiz. Ana shunday vaziyatlarda React sizga haqiqiy yordamchi bo‘ladi. U komponentlar asosida ishlaydi, ya'ni saytni kichik bo‘laklarga bo‘lib, har bir bo‘lakni alohida boshqarish imkonini beradi. Bu esa kodni soddaroq, tushunarliroq va qayta foydalanishga yaroqli qiladi.

React bilan ishlash uchun sizga birinchi navbatda JavaScript bo‘yicha yaxshi tushuncha kerak bo‘ladi. Ammo xavotir olmang, bu kurs davomida kerakli barcha bilimlarni amalda ko‘rib chiqamiz. Biz birinchi sahifamizni yaratishdan boshlab, butun boshli mini-ilovalar tuzishga qadar birga ishlaymiz. Dastlab siz React Appni qanday yaratishni, komponentlar nima ekanini, props va state qanday ishlashini o‘rganasiz. Keyinchalik esa formalarni boshqarish, APIdan ma'lumot olish, routing, va hatto kichik loyiha qilishgacha boramiz.

Bu yo‘l oson bo‘lmasligi mumkin, lekin men har bir darsni siz uchun imkon qadar tushunarli va sodda qilib tayyorlayman. Agar siz har darsni e'tibor bilan kuzatsangiz, kodlarni o‘zingiz ham yozib ko‘rsangiz, React sizga do‘st bo‘lib qoladi. Ishonavering, dastlab sizga g‘alati tuyulgan sintaksis bir necha darsdan so‘ng tanish va hatto qulay bo‘lib qoladi.

Demak, hozirgi vazifa oddiy: hech qanday qo‘rquvsiz, ochiq fikr bilan boshlang. Birinchi React ilovangizni yaratish orqali siz yangi bosqichga qadam qo‘yasiz. Kelajakdagi ish imkoniyatlari, portfelingiz va ishonchingiz shu qadamdan boshlanadi. Tayyormisiz? Unda boshlaymiz!`,
  },
];

function Courses() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🚀 Mavjud Kurslar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courseList.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="bg-gradient-to-br from-blue-100 to-white border border-blue-200 rounded-xl shadow-md p-5 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-700">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;

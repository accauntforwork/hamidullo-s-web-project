// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function VideoPage() {
//   const courseList = [
//     {
//       id: "html",
//       lessonScript: `Assalomu alaykum, azizlar! Bugun biz HTMLga, ya'ni web-sahifalarni yaratishning asosiga birinchi qadam qo'yamiz. HTML degani nima, u qanday ishlaydi va nega u web-dasturchilar uchun muhim — shu savollarga javob topamiz.

//   Avvalo, HTML so'zi ingliz tilidagi “HyperText Markup Language” iborasining qisqartmasi. Bu til veb-brauzerlarga sahifada nima ko‘rsatish kerakligini aytadigan til. Siz internetda ko‘rayotgan har qanday sahifa, maqola, tugma yoki rasm — bularning barchasi HTML orqali yaratilgan.

//   HTML bu dasturlash tili emas, u belgilar tili — ya’ni markup language. U bizga matn, rasm, video va boshqa elementlarni qanday joylashtirish kerakligini bildiradi. Masalan, matnni paragraf qilish uchun <p> tegi, sarlavha qilish uchun esa <h1> dan <h6> gacha bo‘lgan teglar ishlatiladi.

//   Qanday qilib HTML fayl yaratiladi? Juda oddiy. Kompyuteringizda Notepad yoki boshqa matn muharririni ochasiz va kod yozishni boshlaysiz. Faylni .html kengaytmada saqlaysiz, masalan index.html. So‘ngra uni brauzerda ochsangiz, siz yozgan matnni ko‘rasiz.

//   HTMLda har bir tegi ikki qismdan iborat: ochuvchi va yopuvchi. Masalan, <p> bu ochuvchi teg, </p> esa yopuvchi teg. Bu HTMLga: “Mana bu matn paragraf bo‘ladi,” degan buyruqni beradi. Har doim ochilgan tegni yopishni unutmang.

//   HTML oddiy ko‘rinishi mumkin, lekin u veb-dizaynning eng asosiy poydevori hisoblanadi. Bu bilimlar orqali siz keyinchalik CSS va JavaScript kabi texnologiyalarni ham oson tushunib olasiz.

//   Bugungi darsimiz aynan shu — HTML bilan tanishish edi. Keyingi videoda biz amaliy mashq qilamiz, ya'ni birinchi web-sahifamizni yozamiz. Siz ham dars davomida o‘z kompyuteringizda men bilan birga kod yozishga harakat qiling.`,
//     },
//     {
//       id: "js",
//       lessonScript: `Assalomu alaykum! Yaxshimisiz? Bugun biz JavaScript olamiga birinchi qadamingizni qo‘yamiz. Balki eshitgandirsiz, JavaScript bu — web saytlarni jonlantiradigan kuch. Agar HTML saytning tanasi bo‘lsa, CSS uning ko‘rinishi bo‘lsa, JavaScript esa — ruhidir. U foydalanuvchi bilan aloqada bo‘ladigan, harakatga keltiradigan til.

//   JavaScriptni o‘rganish orqali siz tugmalarni bosganda qandaydir amal bajarish, sahifada avtomatik o‘zgarishlar qilish yoki foydalanuvchi ma'lumotini qayta ishlash kabi ko‘plab interaktiv funksiyalarni yarata olasiz. Asosiysi, bu tilni o‘rganish sizga haqiqiy web dasturchi bo‘lish yo‘lini ochadi. Va eng yaxshi tomoni — JavaScriptni o‘rganish uchun sizda faqatgina oddiy brauzer va matn muharriri bo‘lsa kifoya.

//   Bugungi darsimizda biz JavaScript nima ekanini tushunamiz va eng birinchi kodimizni yozamiz. Juda oddiy kod bo‘ladi, lekin bu kod orqali siz birinchi marta kompyuterga: "Ey, buni qil!" — deb buyruq berasiz. Va bu hissiyot, ishoning, juda ajoyib. Chunki o‘sha birinchi marta “console.log("Salom, JavaScript!")” deb yozganingizda, siz endi kod yozadigan odamga aylanasiz.

//   JavaScriptni o‘rganish davomida siz ko‘p yangiliklarga duch kelasiz. Avvaliga bu sizni biroz charchatishi mumkin, lekin har bir kichik tushuncha sizni katta bir qurilish tomon olib boradi. Siz har safar yangi kod yozganingizda o‘zingizni bir oz kuchliroq his qilasiz. Har safar tushunganingizda, “Voy, bu aslida oddiymi?” degan fikr paydo bo‘ladi.

//   Men siz bilan birga bo‘laman, birgalikda o‘rganamiz. Har bir mavzuni hayotiy, oddiy va tushunarli qilib tushuntirishga harakat qilaman. Sizdan faqat sabr va qiziqish talab qilinadi. O‘zingizni hech qachon “menga qiyin” deb o‘ylamang. JavaScript — bu mantiq. Mantiq esa asta-sekinlik bilan shakllanadi.

//   Yaxshi, unda boshladik! Brauzerni oching, matn muharririni tayyorlang va birinchi kodingizni yozishga tayyorlaning. Esingizda bo‘lsin, bu yo‘lning boshlanishi. Katta dasturchilik yo‘lining eng birinchi qadami. Omad sizga yor bo‘lsin!`,
//     },
//     {
//       id: "react",
//       lessonScript: `Assalomu alaykum! ReactJS kursimizga xush kelibsiz. Agar siz HTML, CSS, va JavaScript bilan tanish bo‘lsangiz, unda bu texnologiyani o‘rganish vaqti keldi. React — bu Facebook tomonidan yaratilgan, dunyodagi eng mashhur frontend kutubxonasi. U bizga murakkab va tez ishlaydigan web ilovalarni sodda va tartibli tarzda yaratishga yordam beradi.

//   Dasturchilik yo‘lida bir bosqich keladiki, oddiy HTML sahifalar yetarli bo‘lmay qoladi. Ayniqsa siz foydalanuvchi bilan interaktiv bo‘lgan, tez ishlaydigan va ko‘p sahifali saytlar yaratmoqchi bo‘lsangiz. Ana shunday vaziyatlarda React sizga haqiqiy yordamchi bo‘ladi. U komponentlar asosida ishlaydi, ya'ni saytni kichik bo‘laklarga bo‘lib, har bir bo‘lakni alohida boshqarish imkonini beradi. Bu esa kodni soddaroq, tushunarliroq va qayta foydalanishga yaroqli qiladi.

//   React bilan ishlash uchun sizga birinchi navbatda JavaScript bo‘yicha yaxshi tushuncha kerak bo‘ladi. Ammo xavotir olmang, bu kurs davomida kerakli barcha bilimlarni amalda ko‘rib chiqamiz. Biz birinchi sahifamizni yaratishdan boshlab, butun boshli mini-ilovalar tuzishga qadar birga ishlaymiz. Dastlab siz React Appni qanday yaratishni, komponentlar nima ekanini, props va state qanday ishlashini o‘rganasiz. Keyinchalik esa formalarni boshqarish, APIdan ma'lumot olish, routing, va hatto kichik loyiha qilishgacha boramiz.

//   Bu yo‘l oson bo‘lmasligi mumkin, lekin men har bir darsni siz uchun imkon qadar tushunarli va sodda qilib tayyorlayman. Agar siz har darsni e'tibor bilan kuzatsangiz, kodlarni o‘zingiz ham yozib ko‘rsangiz, React sizga do‘st bo‘lib qoladi. Ishonavering, dastlab sizga g‘alati tuyulgan sintaksis bir necha darsdan so‘ng tanish va hatto qulay bo‘lib qoladi.

//   Demak, hozirgi vazifa oddiy: hech qanday qo‘rquvsiz, ochiq fikr bilan boshlang. Birinchi React ilovangizni yaratish orqali siz yangi bosqichga qadam qo‘yasiz. Kelajakdagi ish imkoniyatlari, portfelingiz va ishonchingiz shu qadamdan boshlanadi. Tayyormisiz? Unda boshlaymiz!`,
//     },
//   ];

//   const { courseId, videoId } = useParams();
//   const noteKey = `${courseId}-video-${videoId}-notes`;
//   const [note, setNote] = useState("");
//   const [videoData, setVideoData] = useState(null);

//   useEffect(() => {
//     const saved = localStorage.getItem(noteKey);
//     if (saved) setNote(saved);
//   }, [noteKey]);

//   useEffect(() => {
//     fetch("/data/videos.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = (data[courseId] || []).find((v) => v.id === videoId);
//         setVideoData(found);
//       });
//   }, [courseId, videoId]);

//   const handleChange = (e) => {
//     setNote(e.target.value);
//     localStorage.setItem(noteKey, e.target.value);
//   };

//   if (!videoData) return <p className="p-6">Video topilmadi</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">{videoData.title}</h2>
//       <div className="mb-6 aspect-video">
//         <iframe
//           className="w-full h-full rounded shadow"
//           src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
//           title={videoData.title}
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       </div>
//       <div>

//       </div>
//       <div>
//         <label className="block font-medium mb-2">Qayd yozuvi:</label>
//         <textarea
//           className="w-full p-3 border rounded h-40"
//           value={note}
//           onChange={handleChange}
//           placeholder="Bu yerda eslatmalar yozing..."
//         />
//       </div>
//     </div>
//   );
// }

// export default VideoPage;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function VideoPage() {
  // const courseList = [
  //   {
  //     id: "html",
  //     lessonScript: `Assalomu alaykum, azizlar! Bugun biz HTMLga ...`,
  //   },
  //   {
  //     id: "js",
  //     lessonScript: `Assalomu alaykum! Yaxshimisiz? Bugun biz JavaScript ...`,
  //   },
  //   {
  //     id: "react",
  //     lessonScript: `Assalomu alaykum! ReactJS kursimizga xush kelibsiz ...`,
  //   },
  // ];
  const courseList = [
    {
      id: "html",
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
      lessonScript: `Assalomu alaykum! Yaxshimisiz? Bugun biz JavaScript olamiga birinchi qadamingizni qo‘yamiz. Balki eshitgandirsiz, JavaScript bu — web saytlarni jonlantiradigan kuch. Agar HTML saytning tanasi bo‘lsa, CSS uning ko‘rinishi bo‘lsa, JavaScript esa — ruhidir. U foydalanuvchi bilan aloqada bo‘ladigan, harakatga keltiradigan til.
    
      JavaScriptni o‘rganish orqali siz tugmalarni bosganda qandaydir amal bajarish, sahifada avtomatik o‘zgarishlar qilish yoki foydalanuvchi ma'lumotini qayta ishlash kabi ko‘plab interaktiv funksiyalarni yarata olasiz. Asosiysi, bu tilni o‘rganish sizga haqiqiy web dasturchi bo‘lish yo‘lini ochadi. Va eng yaxshi tomoni — JavaScriptni o‘rganish uchun sizda faqatgina oddiy brauzer va matn muharriri bo‘lsa kifoya.
    
      Bugungi darsimizda biz JavaScript nima ekanini tushunamiz va eng birinchi kodimizni yozamiz. Juda oddiy kod bo‘ladi, lekin bu kod orqali siz birinchi marta kompyuterga: "Ey, buni qil!" — deb buyruq berasiz. Va bu hissiyot, ishoning, juda ajoyib. Chunki o‘sha birinchi marta “console.log("Salom, JavaScript!")” deb yozganingizda, siz endi kod yozadigan odamga aylanasiz.
    
      JavaScriptni o‘rganish davomida siz ko‘p yangiliklarga duch kelasiz. Avvaliga bu sizni biroz charchatishi mumkin, lekin har bir kichik tushuncha sizni katta bir qurilish tomon olib boradi. Siz har safar yangi kod yozganingizda o‘zingizni bir oz kuchliroq his qilasiz. Har safar tushunganingizda, “Voy, bu aslida oddiymi?” degan fikr paydo bo‘ladi.
    
      Men siz bilan birga bo‘laman, birgalikda o‘rganamiz. Har bir mavzuni hayotiy, oddiy va tushunarli qilib tushuntirishga harakat qilaman. Sizdan faqat sabr va qiziqish talab qilinadi. O‘zingizni hech qachon “menga qiyin” deb o‘ylamang. JavaScript — bu mantiq. Mantiq esa asta-sekinlik bilan shakllanadi.
    
      Yaxshi, unda boshladik! Brauzerni oching, matn muharririni tayyorlang va birinchi kodingizni yozishga tayyorlaning. Esingizda bo‘lsin, bu yo‘lning boshlanishi. Katta dasturchilik yo‘lining eng birinchi qadami. Omad sizga yor bo‘lsin!`,
    },
    {
      id: "react",
      lessonScript: `Assalomu alaykum! ReactJS kursimizga xush kelibsiz. Agar siz HTML, CSS, va JavaScript bilan tanish bo‘lsangiz, unda bu texnologiyani o‘rganish vaqti keldi. React — bu Facebook tomonidan yaratilgan, dunyodagi eng mashhur frontend kutubxonasi. U bizga murakkab va tez ishlaydigan web ilovalarni sodda va tartibli tarzda yaratishga yordam beradi.
    
      Dasturchilik yo‘lida bir bosqich keladiki, oddiy HTML sahifalar yetarli bo‘lmay qoladi. Ayniqsa siz foydalanuvchi bilan interaktiv bo‘lgan, tez ishlaydigan va ko‘p sahifali saytlar yaratmoqchi bo‘lsangiz. Ana shunday vaziyatlarda React sizga haqiqiy yordamchi bo‘ladi. U komponentlar asosida ishlaydi, ya'ni saytni kichik bo‘laklarga bo‘lib, har bir bo‘lakni alohida boshqarish imkonini beradi. Bu esa kodni soddaroq, tushunarliroq va qayta foydalanishga yaroqli qiladi.
    
      React bilan ishlash uchun sizga birinchi navbatda JavaScript bo‘yicha yaxshi tushuncha kerak bo‘ladi. Ammo xavotir olmang, bu kurs davomida kerakli barcha bilimlarni amalda ko‘rib chiqamiz. Biz birinchi sahifamizni yaratishdan boshlab, butun boshli mini-ilovalar tuzishga qadar birga ishlaymiz. Dastlab siz React Appni qanday yaratishni, komponentlar nima ekanini, props va state qanday ishlashini o‘rganasiz. Keyinchalik esa formalarni boshqarish, APIdan ma'lumot olish, routing, va hatto kichik loyiha qilishgacha boramiz.
    
      Bu yo‘l oson bo‘lmasligi mumkin, lekin men har bir darsni siz uchun imkon qadar tushunarli va sodda qilib tayyorlayman. Agar siz har darsni e'tibor bilan kuzatsangiz, kodlarni o‘zingiz ham yozib ko‘rsangiz, React sizga do‘st bo‘lib qoladi. Ishonavering, dastlab sizga g‘alati tuyulgan sintaksis bir necha darsdan so‘ng tanish va hatto qulay bo‘lib qoladi.
    
      Demak, hozirgi vazifa oddiy: hech qanday qo‘rquvsiz, ochiq fikr bilan boshlang. Birinchi React ilovangizni yaratish orqali siz yangi bosqichga qadam qo‘yasiz. Kelajakdagi ish imkoniyatlari, portfelingiz va ishonchingiz shu qadamdan boshlanadi. Tayyormisiz? Unda boshlaymiz!`,
    },
  ];

  const { courseId, videoId } = useParams();
  const noteKey = `${courseId}-video-${videoId}-notes`;
  const [note, setNote] = useState("");
  const [videoData, setVideoData] = useState(null);

  // 🔍 Tegishli courseScript topiladi
  const course = courseList.find((c) => c.id === courseId);
  const lessonScript = course?.lessonScript;

  useEffect(() => {
    const saved = localStorage.getItem(noteKey);
    if (saved) setNote(saved);
  }, [noteKey]);

  useEffect(() => {
    fetch("/data/videos.json")
      .then((res) => res.json())
      .then((data) => {
        const found = (data[courseId] || []).find((v) => v.id === videoId);
        setVideoData(found);
      });
  }, [courseId, videoId]);

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem(noteKey, e.target.value);
  };

  if (!videoData) return <p className="p-6">Video topilmadi</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{videoData.title}</h2>

      {/* 🎥 YouTube video */}
      <div className="mb-6 aspect-video">
        <iframe
          className="w-full h-full rounded shadow"
          src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
          title={videoData.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* 📜 Lesson script (agar mavjud bo‘lsa) */}
      {lessonScript && (
        <div className="mb-6 bg-gray-50 border border-gray-200 p-4 rounded text-gray-800 whitespace-pre-line">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">
            📘 Dars matni:
          </h3>
          {lessonScript}
        </div>
      )}

      {/* 📝 Qayd yozuvi */}
      <div>
        <label className="block font-medium mb-2">🗒️ Qayd yozuvi:</label>
        <textarea
          className="w-full p-3 border rounded h-40"
          value={note}
          onChange={handleChange}
          placeholder="Bu yerda eslatmalar yozing..."
        />
      </div>
    </div>
  );
}

export default VideoPage;

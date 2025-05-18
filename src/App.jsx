import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Statistics from "./components/Statistics";
import CourseDetail from "./components/CourseDetail";
import VideoPage from "./components/VideoPage";
import QuizPage from "./components/QuizPage";
// import ChatPage from "./components/Chatbot";
import Lessons from "./components/Lessons";
import LessonDetail from "./components/LessonDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      <div
        className="min-h-screen bg-gray-100 font-sans px-4 sm:px-6 md:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/bg.jpg')`,
        }}
      >
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/courses"
            element={isLoggedIn ? <Courses /> : <Navigate to="/login" />}
          />
          <Route
            path="/statistics"
            element={isLoggedIn ? <Statistics /> : <Navigate to="/login" />}
          />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route
            path="/courses/:courseId/video/:videoId"
            element={<VideoPage />}
          />
          <Route path="/quiz/:courseId" element={<QuizPage />} />
          <Route
            path="/lessons"
            element={isLoggedIn ? <Lessons /> : <Navigate to="/login" />}
          />
          <Route
            path="/lessons/:id"
            element={isLoggedIn ? <LessonDetail /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import Courses from "./components/Courses";
// import Statistics from "./components/Statistics";
// import CourseDetail from "./components/CourseDetail";
// import VideoPage from "./components/VideoPage";
// import QuizPage from "./components/QuizPage";
// import ChatPage from "./components/Chatbot";
// import Lessons from "./components/Lessons";
// import LessonDetail from "./components/LessonDetail";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loggedIn);
//   }, []);

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 font-sans">
//         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         <Routes>
//           <Route
//             path="/login"
//             element={<Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route
//             path="/"
//             element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/courses"
//             element={isLoggedIn ? <Courses /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/statistics"
//             element={isLoggedIn ? <Statistics /> : <Navigate to="/login" />}
//           />
//           <Route path="/chat" element={<ChatPage />} />
//           <Route path="/courses/:courseId" element={<CourseDetail />} />
//           <Route
//             path="/courses/:courseId/video/:videoId"
//             element={<VideoPage />}
//           />
//           <Route path="/quiz/:courseId" element={<QuizPage />} />
//           <Route
//             path="/lessons"
//             element={isLoggedIn ? <Lessons /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/lessons/:id"
//             element={isLoggedIn ? <LessonDetail /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

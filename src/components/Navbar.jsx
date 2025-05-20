import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow px-4 py-3 sm:px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Hamidullo's LP</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Asosiy
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-500">
                Kurslar
              </Link>
              <Link
                to="/statistics"
                className="text-gray-700 hover:text-blue-500"
              >
                Statistika
              </Link>
              <Link to="/lessons" className="text-gray-700 hover:text-blue-500">
                Elektron darslik
              </Link>
              <Link
                to="/playground"
                className="text-gray-700 hover:text-blue-500"
              >
                Kod mashq sahifasi
              </Link>

              <button onClick={handleLogout} className="text-red-500 ml-2">
                Chiqish
              </button>
            </>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 space-y-2 md:hidden">
          {isLoggedIn ? (
            <>
              <Link to="/" className="block text-gray-700 hover:text-blue-500">
                Asosiy
              </Link>
              <Link
                to="/courses"
                className="block text-gray-700 hover:text-blue-500"
              >
                Kurslar
              </Link>
              <Link
                to="/statistics"
                className="block text-gray-700 hover:text-blue-500"
              >
                Statistika
              </Link>
              <Link
                to="/lessons"
                className="block text-gray-700 hover:text-blue-500"
              >
                Elektron darslik
              </Link>
              <button
                onClick={handleLogout}
                className="block text-red-500 w-full text-left"
              >
                Chiqish
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block text-gray-700 hover:text-blue-500"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   return (
//     <nav className="bg-white shadow p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold text-blue-600">Hamidullo's LP</h1>
//       <div className="space-x-4">
//         {isLoggedIn ? (
//           <>
//             <Link to="/" className="text-gray-700 hover:text-blue-500">
//               Asosiy
//             </Link>

//             <Link to="/chat" className="text-gray-700 hover:text-blue-500">
//               Ai bilan chat
//             </Link>

//             <Link to="/courses" className="text-gray-700 hover:text-blue-500">
//               Kurslar
//             </Link>
//             <Link
//               to="/statistics"
//               className="text-gray-700 hover:text-blue-500"
//             >
//               Statistika
//             </Link>
//             <Link to="/lessons" className="text-gray-700 hover:text-blue-500">
//               Elektron darslik
//             </Link>

//             <button
//               onClick={() => {
//                 localStorage.clear();
//                 setIsLoggedIn(false);
//               }}
//               className="text-red-500 ml-2"
//             >
//               Chiqish
//             </button>
//           </>
//         ) : (
//           <Link to="/login" className="text-gray-700 hover:text-blue-500">
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

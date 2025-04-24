import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Hamidullo's LP</h1>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Asosiy
            </Link>

            <Link to="/chat" className="text-gray-700 hover:text-blue-500">
              Ai bilan chat
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

            <button
              onClick={() => {
                localStorage.clear();
                setIsLoggedIn(false);
              }}
              className="text-red-500 ml-2"
            >
              Chiqish
            </button>
          </>
        ) : (
          <Link to="/login" className="text-gray-700 hover:text-blue-500">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

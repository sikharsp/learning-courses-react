import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useRef, useEffect } from 'react';

export const Navbar = () => {
    const { user, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userData, setUserData] = useState({});
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (user && user.name) {
            setUserData(user);
            localStorage.setItem('userData', JSON.stringify(user));
        } else {
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                try {
                    setUserData(JSON.parse(storedUserData));
                } catch {
                    setUserData({});
                }
            }
        }
    }, [user]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const userInitial =
        typeof userData.name === 'string' && userData.name.length > 0
            ? userData.name[0].toUpperCase()
            : 'U';

    return (
        <nav className="bg-indigo-100 shadow-lg border-b border-indigo-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-3xl font-extrabold text-indigo-700">
                            EduLearn
                        </Link>
                        <div className="hidden sm:flex space-x-6">
                            <Link
                                to="/courses"
                                className="text-indigo-600 hover:text-indigo-900 hover:underline transition duration-200"
                            >
                                Courses
                            </Link>
                            <Link
                                to="/categories"
                                className="text-indigo-600 hover:text-indigo-900 hover:underline transition duration-200"
                            >
                                Categories
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen}
                                    className="flex items-center space-x-2 text-indigo-700 hover:text-indigo-900 transition duration-200"
                                >
                                    <div className="w-9 h-9 rounded-full bg-indigo-700 flex items-center justify-center text-white font-semibold">
                                        {userInitial}
                                    </div>
                                    <span className="hidden md:block text-indigo-800 font-medium">
                                        {userData.name || 'User'}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                               {isDropdownOpen && (
  <div className="absolute right-0 mt-3 w-72 rounded-xl shadow-xl bg-white border border-indigo-200 z-50">
    <div className="p-4 border-b border-indigo-100">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center text-lg font-bold">
          {userInitial}
        </div>
        <div>
          <p className="font-semibold text-indigo-800">{userData.name}</p>
          <p className="text-sm text-indigo-600">{userData.email}</p>
        </div>
      </div>
    </div>

    <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">Total Courses Enrolled</span>
        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
          {userData.totalCourses || 0}
        </span>
      </div>

      <Link
        to="/my-courses"
        className="block text-indigo-700 hover:bg-indigo-100 px-3 py-2 rounded-md transition"
      >
        📚 My Courses
      </Link>
      <Link
        to="/profile"
        className="block text-indigo-700 hover:bg-indigo-100 px-3 py-2 rounded-md transition"
      >
        👤 Profile
      </Link>
      <button
        onClick={() => {
          logout();
          setIsDropdownOpen(false);
        }}
        className="block text-left w-full text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition"
      >
        🚪 Logout
      </button>
    </div>
  </div>
)}

                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/auth?mode=login"
                                    className="px-4 py-2 rounded-md text-indigo-700 font-medium 
                                    hover:bg-indigo-200 hover:text-indigo-900 
                                    focus:outline-none focus:ring-2 focus:ring-indigo-400 
                                    active:bg-indigo-300 transition duration-150"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/auth?mode=register"
                                    className="px-4 py-2 rounded-md bg-indigo-700 text-white font-medium 
                                    hover:bg-indigo-800 active:bg-indigo-900 
                                    focus:outline-none focus:ring-2 focus:ring-indigo-600 
                                    transition duration-150"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

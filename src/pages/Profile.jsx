import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user && user.name) {
      setUserData(user);
      localStorage.setItem("userData", JSON.stringify(user));
    } else {
      const stored = localStorage.getItem("userData");
      if (stored) {
        try {
          setUserData(JSON.parse(stored));
        } catch {
          setUserData({});
        }
      }
    }
  }, [user]);

  const name = userData?.name?.trim() || "User";
  const email = userData?.email?.trim() || "Not Provided";
  const role = userData?.role || "Student";
  const totalCourses = userData?.totalCourses || 0;
  const userInitial = name[0]?.toUpperCase() || "U";

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-xl rounded-lg p-6 border border-indigo-100">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold">
            {userInitial}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-indigo-800">{name}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-indigo-700 font-medium">Total Courses Enrolled</h3>
            <p className="text-2xl text-indigo-900 font-bold mt-2">{totalCourses}</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-indigo-700 font-medium">Account Type</h3>
            <p className="text-lg text-indigo-900 mt-2">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

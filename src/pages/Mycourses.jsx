import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const MyCourses = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyCourses = async () => {
    try {
      const res = await axios.get("https://blog-1rng.onrender.com/user/mycourses", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      setCourses(res.data || []);
    } catch (err) {
      console.error("Failed to fetch enrolled courses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchMyCourses();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) return <p className="text-center mt-10 text-indigo-600">Loading courses...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">My Enrolled Courses</h1>

      {courses.length === 0 ? (
        <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white shadow-md border border-indigo-100 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-indigo-700">{course.title}</h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{course.description}</p>
              <div className="mt-3 text-sm text-indigo-500">Category: {course.category}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;

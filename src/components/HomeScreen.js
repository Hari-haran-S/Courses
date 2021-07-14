import React, { useEffect, useState } from 'react';
import CourseList from './CourseList';

const HomeScreen = () => {
  const [courses, setCourses] = useState([]);
  const loadCourses = async () => {
    try {
      const res = await fetch('/.netlify/functions/getCourses');
      const courses = await res.json();
      setCourses(courses);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className='container py-5'>
      <CourseList courses={courses} />
    </div>
  );
};

export default HomeScreen;

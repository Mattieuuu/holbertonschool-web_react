import React from 'react';
import { useSelector } from 'react-redux';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';

const CourseList = () => {
  const courses = useSelector((state) => state.courses.courses);

  return (
    <div className="CourseList">
      <table id="CourseList">
        <thead>
          <tr>
            <th>Available courses</th>
          </tr>
        </thead>
        <tbody>
          <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
          {courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WithLogging(CourseList);

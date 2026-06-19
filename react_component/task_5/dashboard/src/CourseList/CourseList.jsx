import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

function CourseList({ courses = [] }) {
  return(
    <div id="CourseListContainer" style={{ flex: 1 }}>
      <table id="CourseList" style={{ margin: '1rem 0', width: '90%', justifySelf: 'center', border: '#909090 solid', borderCollapse: 'collapse' }}>
        {courses.length === 0 ? <tbody><CourseListRow isHeader={ true } textFirstCell='No course available yet' /></tbody>:
        <>
          <thead>
            <CourseListRow isHeader={ true } textFirstCell='Available courses' />
            <CourseListRow isHeader={ true } textFirstCell='Course name'  textSecondCell='Credit' />
          </thead>
          <tbody>
            {courses.map((course) => (
              <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
            ))}
          </tbody>
        </>
        }
      </table>
    </div>
  )
}

const CourseListWithLogging = WithLogging(CourseList)

export default CourseListWithLogging;

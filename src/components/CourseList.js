import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CourseCard from './CourseCard';
export default function CourseList({ courses }) {
  return (
    <div>
      {courses && (
        <Row>
          {courses.map((course) => (
            <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

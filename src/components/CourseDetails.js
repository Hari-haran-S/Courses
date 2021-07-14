import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

const CourseDetails = ({ history, match }) => {
  const [course, setCourse] = useState([]);
  const loadCourse = async () => {
    const id = { id: match.params.id };
    try {
      const res = await fetch('/.netlify/functions/getOneCourse', {
        method: 'POST',
        body: JSON.stringify(id),
      });
      const course = await res.json();
      setCourse(course);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <>
        <Row>
          <Col md={6}>
            <Image src={course.image} alt={course.name} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{course.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>Price: ₹{course.price}</ListGroup.Item>
              <ListGroup.Item>Description: {course.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${course.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button className='btn-block' type='button'>
                    {' '}
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </>
  );
};

export default CourseDetails;

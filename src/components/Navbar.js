import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Courses.org',
};

export default Header;

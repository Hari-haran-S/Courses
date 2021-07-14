import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import HomeScreen from './components/HomeScreen';
import Header from './components/Navbar';
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/course/:id' component={CourseDetails} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router';
import { Container } from 'react-bootstrap';
import TableList from './components/pages/TablesList/TableList';
import TableDetails from './components/pages/TableDetails/TableDetails';
import Footer from './components/pages/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<TableList />}></Route>
        <Route path='/table/:id' element={<TableDetails />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;

import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

//components
import TableList from './components/pages/TablesList/TableList';
import TableDetails from './components/pages/TableDetails/TableDetails';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';

//redux
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';
import { fetchStatus } from './redux/statusRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchStatus()), [dispatch]);
  
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<TableList />}></Route>
        <Route path='/table/:id' element={<TableDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;

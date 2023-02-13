import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import {
  editTable,
  getTableById,
  getAllTables
} from '../../../redux/tablesRedux';
import Loader from '../../features/Loader/Loader';
import TableForm from '../../features/TableForm/TableForm';

const TableDetails = ({ action }) => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));
  const allTables = useSelector(getAllTables);

  const dispatch = useDispatch();

  const handleSubmit = (table) => {
    dispatch(editTable({ ...table, id }));
  };

  if (!table && allTables.length) return <Navigate to='/' />;
  if (!table) return <Loader></Loader>;
  else
    return (
      <>
        <h1>Table {table.id}</h1>
        <TableForm
          action={handleSubmit}
          id={table.id}
          status={table.status}
          peopleAmount={table.peopleAmount}
          maxPeopleAmount={table.maxPeopleAmount}
          bill={table.bill}
        />
      </>
    );
};

export default TableDetails;

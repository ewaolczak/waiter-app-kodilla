import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { editTable, getTableById } from '../../../redux/tablesRedux';
import TableForm from '../../features/TableForm/TableForm';

const TableDetails = ({ action }) => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));

  const dispatch = useDispatch();

  const handleSubmit = (table) => {
    dispatch(editTable({ ...table, id }));
  };

  if (!table) return <Navigate to='/' />;
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

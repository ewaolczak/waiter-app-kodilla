import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableById } from '../../../redux/tablesRedux';

const TableDetails = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  const getTable = useSelector((state) => getTableById(state, id));

  const [table] = useState(getTable.id);
  const [status] = useState(getTable.status);
  const [peopleAmount] = useState(getTable.peopleAmount);
  const [maxPeopleAmount] = useState(getTable.maxPeopleAmount);
  const [bill] = useState(getTable.bill);

  return (
    <>
      <h1>Table {table}</h1>
      <Form>
        <Form.Group>
          <Form.Label>
            <strong>Status:</strong>
          </Form.Label>
          <Form.Select value={status}></Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>People amount:</strong>
          </Form.Label>
          <Form.Control value={peopleAmount}></Form.Control>/
          <Form.Control value={maxPeopleAmount}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <strong>Bill:</strong>
          </Form.Label>
          $<Form.Control value={bill}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Link to={`/table/${table.id}`}>
            <Button variant='primary' className='text-nowrap'>
              Update
            </Button>
          </Link>
        </Form.Group>
      </Form>
    </>
  );
};

export default TableDetails;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { /* useDispatch */ useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableById } from '../../../redux/tablesRedux';

const TableDetails = ({ action }) => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  const getTable = useSelector((state) => getTableById(state, id));

  const [table] = useState(getTable.id);
  const [status, setStatus] = useState(getTable.status);
  const [peopleAmount, setpeopleAmount] = useState(getTable.peopleAmount);
  const [maxPeopleAmount, setmaxPeopleAmount] = useState(
    getTable.maxPeopleAmount
  );
  const [bill, setBill] = useState(getTable.bill);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      id,
      status,
      peopleAmount,
      maxPeopleAmount,
      bill
    });
  };

  return (
    <>
      <h1>Table {table}</h1>
      <Form>
        <Form.Group className='mb-3 mt-3'>
          <Row>
            <Col xs={1} className='me-4 align-self-center'>
              <Form.Label className='mt-1 align-self-center'>
                <strong>Status:</strong>
              </Form.Label>
            </Col>
            <Col xs={4}>
              <Form.Select value={status}>
                <option value='Free'>Free</option>
                <option value='Reserved'>Reserved</option>
                <option value='Busy'>Busy</option>
                <option value='Cleaning'>Cleaning</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Row>
            <Col xs={1} className='me-4 align-self-center'>
              <Form.Label className='mt-1 align-self-center'>
                <strong>People:</strong>
              </Form.Label>
            </Col>
            <Col className='d-flex flex-row'>
              <Col xs={1}>
                <Form.Control value={peopleAmount}></Form.Control>
              </Col>
              <Card.Text as='p' className='ps-1 pe-1 align-self-center m-0'>
                /
              </Card.Text>
              <Col xs={1}>
                <Form.Control value={maxPeopleAmount}></Form.Control>
              </Col>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Row>
            <Col xs={1} className='me-4 align-self-center'>
              <Form.Label className='mt-1 align-self-center'>
                <strong>Bill:</strong>
              </Form.Label>
            </Col>
            <Col className='d-flex flex-row'>
              {/* <Card.Text as='p' className='pe-1 align-self-center m-0'>
                $
              </Card.Text> */}
              <Col xs={2}>
                <Form.Control value={`$ ${bill}`}></Form.Control>
              </Col>
            </Col>
          </Row>
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

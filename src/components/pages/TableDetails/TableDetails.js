import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
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
          <Row>
            <Col xs={1}>
              <Form.Label>
                <strong>Status:</strong>
              </Form.Label>
            </Col>
            <Col xs={3}>
              <Form.Select value={status}></Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs={1}>
              <Form.Label>
                <strong>People:</strong>
              </Form.Label>
            </Col>
            <Col xs={5}>
              <Row>
                <Col xs={2}>
                  <Form.Control value={peopleAmount}></Form.Control>
                </Col>
                /
                <Col xs={2}>
                  <Form.Control value={maxPeopleAmount}></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs={1}>
              <Form.Label>
                <strong>Bill:</strong>
              </Form.Label>
            </Col>
            $
            <Col xs={1}>
              <Form.Control value={bill}></Form.Control>
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

import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const TableForm = ({ action, ...props }) => {
  const { id } = useParams();

  const [table] = useState(props.id);
  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      table,
      peopleAmount,
      maxPeopleAmount,
      status,
      bill,
      id
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3 mt-3'>
        <Row>
          <Col xs={1} className='me-4 align-self-center'>
            <Form.Label className='mt-1 align-self-center'>
              <strong>Status:</strong>
            </Form.Label>
          </Col>
          <Col xs={4}>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}>
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
              <Form.Control
                value={peopleAmount}
                onChange={(e) =>
                  setPeopleAmount(e.target.value)
                }></Form.Control>
            </Col>
            <Card.Text as='p' className='ps-1 pe-1 align-self-center m-0'>
              /
            </Card.Text>
            <Col xs={1}>
              <Form.Control
                value={maxPeopleAmount}
                onChange={(e) =>
                  setMaxPeopleAmount(e.target.value)
                }></Form.Control>
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
            {
              <Card.Text as='p' className='pe-1 align-self-center m-0'>
                $
              </Card.Text>
            }
            <Col xs={2}>
              <Form.Control
                value={bill}
                onChange={(e) => setBill(e.target.value)}></Form.Control>
            </Col>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Button type='submit' variant='primary' className='text-nowrap'>
          Update
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TableForm;

import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllStatuses } from '../../../redux/statusRedux';

const TableForm = ({ action, ...props }) => {
  const { id } = useParams();
  const statuses = useSelector(getAllStatuses);

  const [table] = useState(props.id);
  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const navigate = useNavigate();

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
    navigate('/');
  };

  if (parseInt(peopleAmount) < 0) setPeopleAmount('0');
  if (parseInt(maxPeopleAmount) > 10) setMaxPeopleAmount('10');
  if (parseInt(maxPeopleAmount) < 0) setMaxPeopleAmount('0');
  if (parseInt(peopleAmount) > maxPeopleAmount)
    setPeopleAmount(maxPeopleAmount);
  if (parseInt(bill) < 0) setBill('0');
  // if (status === 'Free' || status === 'Cleaning') setPeopleAmount('0')

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
              type='select'
              // value={status ? status : '1'}
              onChange={(e) => setStatus(e.target.value)}>
              <option disabled value='1'>
                Select status...
              </option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
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

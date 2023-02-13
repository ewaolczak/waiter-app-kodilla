import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllStatuses } from '../../../redux/statusRedux';
import { editTableRequest } from '../../../redux/tablesRedux';

const TableForm = ({ action, ...props }) => {
  const { id } = useParams();
  const statuses = useSelector(getAllStatuses);

  const [table] = useState(props.id);
  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTableRequest({
        table,
        peopleAmount,
        maxPeopleAmount,
        status,
        bill,
        id
      })
    );
    setStatus('');
    setPeopleAmount('');
    setMaxPeopleAmount('');
    setBill('');
    navigate('/');
  };

  const handlePeopleAmount = (peopleAmount) => {
    if (parseInt(peopleAmount) < 0) {
      return setPeopleAmount('0');
    }
    if (parseInt(peopleAmount) > maxPeopleAmount) {
      return setPeopleAmount(maxPeopleAmount);
    }
    return setPeopleAmount(peopleAmount);
  };

  const handleMaxPeopleAmount = (maxPeopleAmount) => {
    if (parseInt(maxPeopleAmount) > 10) {
      return setMaxPeopleAmount('10');
    }
    if (parseInt(maxPeopleAmount) < 0) {
      return setMaxPeopleAmount('0');
    }
    return setMaxPeopleAmount(maxPeopleAmount);
  };

  const handleStatus = (e) => {
    const {
      target: { value }
    } = e;
    setStatus(value);
    if (value === 'Busy') {
      setBill(0);
    }
  };

  const handleBill = (bill) => {
    if (parseInt(bill) < 0) {
      return setBill('0');
    }
    return setBill(bill);
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
            <Form.Select type='select' value={status} onChange={handleStatus}>
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
                  handlePeopleAmount(e.target.value)
                }></Form.Control>
            </Col>
            <Card.Text as='p' className='ps-1 pe-1 align-self-center m-0'>
              /
            </Card.Text>
            <Col xs={1}>
              <Form.Control
                value={maxPeopleAmount}
                onChange={(e) =>
                  handleMaxPeopleAmount(e.target.value)
                }></Form.Control>
            </Col>
          </Col>
        </Row>
      </Form.Group>
      {status === 'Busy' && (
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
                  onChange={(e) => handleBill(e.target.value)}></Form.Control>
              </Col>
            </Col>
          </Row>
        </Form.Group>
      )}
      <Form.Group>
        <Button type='submit' variant='primary' className='text-nowrap'>
          Update
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TableForm;

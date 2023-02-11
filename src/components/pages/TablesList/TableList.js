import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTables } from '../../../redux/tablesRedux';

const TableList = () => {
  const tables = useSelector(getAllTables);

  return (
    <>
      <h1>All tables</h1>
      {tables.map((table) => (
        <Card style={{border: 'none'}}>
          <Card.Body className='ps-0 pe-0 border-bottom'>
            <Row className='flex-column flex-md-row'>
              <Col className='d-flex flex-row'>
                <Col xs={4} className="align-self-center">
                  <Card.Title className='fs-3 align-self-center m-0'>
                    Table {table.id}
                  </Card.Title>
                </Col>
                <Col className="align-self-center">
                  <Card.Text as='p' className='align-self-center m-0'>
                    <strong>Status: </strong>
                    {table.status}
                  </Card.Text>
                </Col>
              </Col>
              <Col className='d-flex justify-content-end'>
                <Link to={`/table/${table.id}`}>
                  <Button variant='primary' className='text-nowrap'>
                    Show more
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default TableList;

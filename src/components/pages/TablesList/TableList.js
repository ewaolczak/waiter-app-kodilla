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
        <Card>
          <Card.Body>
            <Row className='flex-column flex-md-row'>
              <Col className='flex-row'>
                <Col>
                  <Card.Title className='fs-4'>Table {table.id}</Card.Title>
                </Col>
                <Col>
                  <Card.Text as='p'>
                    <strong>Status: </strong>
                    {table.status}
                  </Card.Text>
                </Col>
              </Col>
              <Col>
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

import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <Card style={{ border: 'none' }}>
      <Card.Body className='align-self-center'>
        Copyright &copy; WaiterApp 2023
      </Card.Body>
    </Card>
  );
};

export default Footer;

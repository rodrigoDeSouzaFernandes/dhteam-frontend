import React from 'react';
import { Container } from './styles';
import SendMessage from './SendMessage/sendMessage';
import Teachers from './Teachers/teachers';

const Contact: React.FC = () => {
  return (
    <Container>
      <SendMessage />
      <Teachers />
    </Container>
  );
};

export default Contact;

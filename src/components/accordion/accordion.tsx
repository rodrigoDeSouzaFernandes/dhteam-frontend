import React, { useState } from 'react';
import { Container } from './styles';
import { Minus, Plus } from 'ts-react-feather-icons';

interface IProps {
  title: string;
  content: string;
}

const Accordion: React.FC<IProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <button
        className="title"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {title} {isOpen ? <Minus /> : <Plus />}
      </button>
      {isOpen && <div className="content">{content}</div>}
    </Container>
  );
};

export default Accordion;

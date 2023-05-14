import React from 'react';
import { Container } from './styles';
import Accordion from 'components/accordion/accordion';
import mockPerguntas from './mockPerguntas';

const Faq: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">FAQ - dúvidas frequentes</h1>
        <div className="questions-container">
          {mockPerguntas.map((pergunta, index) => (
            <Accordion
              key={`accordion-question-${index}`}
              title={pergunta.question}
              content={pergunta.answer}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;

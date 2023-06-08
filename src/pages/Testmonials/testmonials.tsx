import React from 'react';
import { Container } from './styles';
import TestmonialCard from 'components/testmonialCard/testmonialCard';

const Testmonials: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width content">
        <h1 className="title">
          Construindo uma Comunidade Forte:
          <span className="highlight">
            Depoimentos dos alunos que fazem parte do nosso time
          </span>
        </h1>
        <p className="subtitle">
          Na nossa academia de jiu-jitsu, valorizamos imensamente a opinião dos
          nossos alunos. Acreditamos que o feedback e as experiências
          compartilhadas por aqueles que treinam conosco são de extrema
          importância para o contínuo aprimoramento dos nossos serviços. Estamos
          comprometidos em criar um ambiente acolhedor, motivador e seguro, e é
          por isso que encorajamos nossos alunos a compartilharem seus
          depoimentos. Cada palavra dos nossos alunos é levada em consideração,
          pois nos ajuda a entender o impacto positivo que o jiu-jitsu tem em
          suas vidas. Ouvir nossos alunos nos permite adaptar e personalizar o
          treinamento de acordo com suas necessidades, além de nos incentivar a
          manter nosso alto padrão de excelência. Nossa academia é um espaço
          onde a voz dos alunos é valorizada e respeitada, pois sabemos que são
          eles que tornam a nossa comunidade de jiu-jitsu tão especial.
        </p>

        <div className="testmonials">
          <TestmonialCard />
          <TestmonialCard />
          <TestmonialCard />
          <TestmonialCard />
          <TestmonialCard />
          <TestmonialCard />
          <TestmonialCard />
          <TestmonialCard />
          <TestmonialCard />
        </div>
      </div>
    </Container>
  );
};

export default Testmonials;

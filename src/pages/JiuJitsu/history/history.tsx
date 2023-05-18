import React from 'react';
import { Container } from './styles';
import maedaPhoto from 'assets/images/maeda.svg';

const History: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">
          A história do <span className="highlight">jiu jitsu</span>
        </h1>
        <aside>
          <img src={maedaPhoto} alt="Mitsuyo Maeda" />
          <span className="name">Mitsuyo Maeda</span>
        </aside>
        <p>
          O Jiu Jitsu é uma arte marcial japonesa que se concentra em técnicas
          de luta no solo e estrangulamentos. A história do Jiu Jitsu remonta ao
          Japão feudal do século XVII, onde os samurais enfrentavam situações de
          combate corpo a corpo com frequência. Nesse contexto, um samurai
          chamado Mitsuyo Maeda desenvolveu um estilo de luta chamado Kodokan
          Judo, que enfatizava o uso da técnica e habilidade em vez da força
          bruta para superar um oponente.
        </p>
        <p>
          Maeda era considerado um dos melhores praticantes de Kodokan Judo de
          sua época e, em 1914, ele viajou para o Brasil para ensinar a arte
          marcial. Lá, ele conheceu Carlos Gracie e seus irmãos, que se
          interessaram pelo Jiu Jitsu e começaram a treinar com Maeda.
        </p>
        <p>
          Os Gracie modificaram o Kodokan Judo de Maeda para criar seu próprio
          estilo de Jiu Jitsu, que enfatizava a luta no solo e a finalização de
          oponentes por meio de técnicas de estrangulamento e chave. A família
          Gracie fundou a primeira academia de Jiu Jitsu do mundo em 1925, no
          Rio de Janeiro, e rapidamente a arte marcial se tornou popular no
          Brasil.
        </p>
        <p>
          A popularidade da arte marcial cresceu ainda mais quando a família
          Gracie começou a desafiar lutadores de outras disciplinas, incluindo
          boxe e wrestling, para provas de força e técnica. Essas provas de
          força e técnica se tornaram conhecidas como &quot;vale tudo&quot; ou
          &quot;no holds barred&quot; (sem regras) e foram precursoras do MMA
          (Mixed Martial Arts).
        </p>
        <p>
          Com o tempo, o Jiu Jitsu evoluiu para se tornar um esporte de
          competição, com torneios realizados em todo o mundo. A Confederação
          Brasileira de Jiu Jitsu foi fundada em 1994 para regulamentar as
          competições e promover a arte marcial.
        </p>
        <p>
          O Jiu Jitsu é conhecido por suas técnicas complexas e variedade de
          finalizações, tornando-o uma forma fascinante de arte marcial e um
          esporte emocionante para assistir e praticar. Hoje, o Jiu Jitsu é
          praticado em todo o mundo por pessoas de todas as idades e
          habilidades, desde atletas profissionais até entusiastas amadores.
        </p>
      </div>
    </Container>
  );
};

export default History;

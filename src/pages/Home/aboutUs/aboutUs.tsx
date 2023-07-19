import React from 'react';
import { Container } from './styles';
import logo from 'assets/logo/logo.svg';

const AboutUs: React.FC = () => {
  return (
    <Container backgroundImage={logo}>
      <div className="apply-max-width" id="sobre-nos">
        <aside className="about-us">
          <h1>Sobre nós</h1>
          <p>
            A [nome da academia] é uma academia de jiu-jitsu fundada em [ano de
            fundação], com o objetivo de oferecer um ambiente acolhedor e
            profissional para a prática do esporte. Desde então, temos formado
            uma comunidade de praticantes apaixonados pelo jiu-jitsu e pelo
            estilo de vida saudável que ele proporciona.
          </p>
          <p>
            Aqui, valorizamos o ensino de qualidade, a segurança e o respeito
            mútuo entre todos os membros da academia. Nossa equipe de
            professores é altamente qualificada e experiente, e está sempre
            buscando aprimorar suas habilidades para oferecer um treinamento
            ainda mais completo.
          </p>
          <p>
            Nosso foco é formar atletas competitivos, mas também desenvolver
            habilidades que vão além do tatame, como a disciplina, o foco e a
            autoconfiança. Somos uma academia pequena e local, mas estamos
            comprometidos em oferecer um treinamento de alto nível para todos os
            nossos alunos, independentemente de idade, gênero ou nível de
            experiência.
          </p>
          <p>
            Venha nos conhecer e fazer parte da nossa comunidade de praticantes
            de jiu-jitsu!
          </p>
        </aside>
        <aside className="our-mission">
          <h1>Nossa Missão</h1>
          <p>
            Na [nome da academia], nossa missão é fornecer a nossos alunos um
            ambiente seguro e inclusivo para praticar o jiu-jitsu, enquanto
            incentivamos o crescimento pessoal e físico por meio da disciplina e
            do respeito mútuo. Acreditamos que o jiu-jitsu é muito mais do que
            um simples esporte – é um estilo de vida que pode transformar a
            maneira como nos relacionamos com nós mesmos e com os outros.
          </p>
          <p>
            Valorizamos o ensino de alta qualidade e a melhoria contínua de
            nossos instrutores, e nos esforçamos para oferecer uma experiência
            de aprendizado envolvente e desafiadora para nossos alunos. Queremos
            que cada aluno alcance seu potencial máximo, seja qual for o nível
            de habilidade ou experiência.
          </p>
          <p>
            Além disso, acreditamos na importância da comunidade e do trabalho
            em equipe. Nossa academia é um lugar onde pessoas de todas as
            origens e habilidades se unem em busca de um objetivo comum.
            Valorizamos a inclusão, a diversidade e a igualdade de oportunidades
            para todos os nossos alunos.
          </p>
          <p>
            Se você está procurando uma academia de jiu-jitsu comprometida com
            seu crescimento pessoal e físico, venha nos conhecer na [nome da
            academia]. Estamos ansiosos para ajudá-lo a alcançar seus objetivos!
          </p>
        </aside>
      </div>
    </Container>
  );
};

export default AboutUs;

import React from 'react';
import { Container } from './styles';

const rules = [
  'Peça licença e aguarde a autorização do professor para entrar no tatame',
  'Retire seu calçado para entrar no tatame e utilize seu calçado fora do tatame, para evitar a entrada de sujeiras e impurezas.',
  'Ao entrar no tatame, cumprimente todas as pessoas por ordem de faixa, do mais graduado ao menos graduado',
  'É fundamental manter uma boa higiene pessoal, como tomar banho antes do treino, cortar as unhas adequadamente e usar roupas limpas e quimonos higienizados.',
  ' Antes e depois de cada treino ou luta, é comum cumprimentar os companheiros de treino ou adversários com um aperto de mão ou um aceno de cabeça, como sinal de respeito.',
  'Conheça e respeite os limites dos seus parceiros de treino. Não force movimentos que possam causar desconforto ou lesões.',
  'É fundamental seguir atentamente as instruções do professor, demonstrando respeito e total atenção durante as aulas e treinos.',
  'Não mascar chicletes ou comer no tatame;',
  'Abstenha-se de falar ou mexer no celular durante o treino.',
  'Durante os treinos, comunique-se de forma respeitosa com seus parceiros de treino e professores',
  'Evite conversas paralelas ou distrações desnecessárias durante as explicações do professor.',
  'Seja um exemplo de conduta ética e respeitosa dentro e fora do tatame, representando positivamente a arte do jiu-jitsu.',
];

const Rules: React.FC = () => {
  return (
    <Container>
      <div className="apply-max-width">
        <h1 className="title">Regras e Boas Maneiras no Tatame</h1>
        <p className="subtitle">
          Conheça as principais regras e etiquetas do jiu-jitsu. Explore os
          princípios fundamentais e as condutas exemplares dessa arte marcial.
          Viva a essência do respeito ao ambiente de treino e aos seus colegas
          de prática.
        </p>
        <ul className="rules-container">
          {rules.map((rule, index) => (
            <li key={`rule-${index}`}>{rule}</li>
          ))}
        </ul>
        <div className="oss">
          <p className="oss-title">
            <span>O</span>
            <span>S</span>
            <span>S</span>
            <span>!</span>
          </p>
          <p className="oss-description">
            O &quot;OSS&quot; é uma expressão muito comum no Jiu Jitsu, usada
            para demonstrar respeito, humildade e determinação. A palavra não
            tem uma tradução literal, mas é considerada uma espécie de
            cumprimento entre os praticantes.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Rules;

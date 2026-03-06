import React from 'react';

const PropsExample = ({nome, disciplina}) => {
  return (
    <div>
     <h3> Olá {nome}</h3>
     <p> Professor de: {disciplina}</p>
    </div>
  );
};

export default PropsExample;
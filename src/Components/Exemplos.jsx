import React from 'react'

const Exemplos = () => {
  const userName = 'Mari';
  const user = {
    name: "Maria",
    lastName: 'De Fatima',
  };

  function getGreeting(name) {
    return `Olá ${name}`;
  };

  const userIsLoggedin = false;

  const userRole = 'admin';

  const users = [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Antonio' },
    { id: 3, name: 'Francisco' },
    { id: 4, name: 'José' },
  ];

  return (
    <div>
      <h2>Conteudo visivel aos usuários</h2>
      <p>O nome do usuária é {userName}</p>
      <p>A usuária {user.name} {user.lastName} tem {10 + 8} anos</p>
      <p>{getGreeting(user.name)}</p>
      <p>{getGreeting("João")}</p>

      <div className="teste">Teste</div>

      <p><button onClick={() => alert('Teste')}>Para testar, clique aqui</button></p>

      <p><input type="text" className="nome" placeholder='digite seu nome' /></p>

      <div>
        {userIsLoggedin ? (<p>Caso:Está logado</p>) : (<p>Caso: Não Está logado</p>)}

        <p>{userRole === 'admin' && 'Você é um admin'}</p>

      </div>

      <div>
        <ul>
          {users.map((user) => (
            <li>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Exemplos

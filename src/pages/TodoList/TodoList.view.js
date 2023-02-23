import React, { useRef } from 'react';

const TodoList = () => {
  let input = useRef();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Todo list</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          width: '100%',
        }}
      >
        <div>
          <h3>Añade una tarea</h3>
          <form onSubmit={(e) => console.log(e)}>
            <input
              ref={(node) => {
                input = node;
              }}
              type="text"
            />
            <button type="submit">Enviar</button>
          </form>
          <p>VALOR: </p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

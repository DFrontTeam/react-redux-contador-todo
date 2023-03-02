import React from 'react';


const TodoListThunk = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Consíguelos a todos</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          width: '100%',
        }}
      >
        <div>
          <h3>Pokemon por capturar</h3>
          <ul>
            {/** crea la lista */}
          </ul>
        </div>
        <div>
          <h3>Pokemon capturados</h3>
          <ul>
            {/** crea la lista */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoListThunk;

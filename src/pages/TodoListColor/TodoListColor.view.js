import React from 'react';

const TodoListColor = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Todo list Colors</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          width: '100%',
        }}
      >
        <div>
          <h3>Todo</h3>
          <p>Completa todas las tareas</p>
          <ul>
            {/** crea la lista */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoListColor;

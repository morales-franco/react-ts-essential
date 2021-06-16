import React from 'react';
import { CounterReducer, CounterState } from './reducer/Reducer';

const CounterStateDefault: CounterState = {
  counter: 0,
  auditInfo: [
    {
      userId: 'user_1',
      operation: 'create',
    },
    {
      userId: 'user_2',
      operation: 'create',
    },
  ],
};

export const CounterWithUseReducer = () => {
  const [state, dispatch] = React.useReducer(
    CounterReducer,
    CounterStateDefault
  );

  const handleIncrement = () => {
    dispatch({
      type: 'increment',
      payload: {
        value: 1,
      },
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'decrement',
      payload: {
        value: 1,
      },
    });
  };

  const handleAddUser = () => {
    dispatch({
      type: 'add_user',
      payload: {
        userId: `user_${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`,
        operation: 'create',
      },
    });
  };

  const handleUpdateUser = () => {
    dispatch({
      type: 'update_user',
      payload: {
        userId: `user_${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`,
        operation: 'modify',
      },
    });
  };

  const handleRemoveUser = () => {
    dispatch({
      type: 'remove_user',
      payload: {
        userId: `user_${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`,
      },
    });
  };

  return (
    <>
      <div className='row'>
        <h1>Counter: {state.counter}</h1>
        <h1>Audit Info </h1>
        <pre>{state.auditInfo && JSON.stringify(state.auditInfo, null, 2)}</pre>
      </div>
      <div className='row'>
        <button className='btn btn-primary mb-1' onClick={handleIncrement}>
          Counter + 1
        </button>
        <button className='btn btn-primary mb-1' onClick={handleDecrement}>
          Counter - 1
        </button>
        <button className='btn btn-primary mb-1' onClick={handleAddUser}>
          Add User
        </button>
        <button className='btn btn-primary mb-1' onClick={handleUpdateUser}>
          Try Update (change to modify)
        </button>
        <button className='btn btn-primary mb-1' onClick={handleRemoveUser}>
          Try remove
        </button>
      </div>
    </>
  );
};

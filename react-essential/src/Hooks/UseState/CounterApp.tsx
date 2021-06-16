import React from 'react';

interface CounterCommonState {
  counter1: number;
  counter2: number;
}

export const CounterApp: React.FC = () => {
  const [commonState, setCommonState] = React.useState<CounterCommonState>({
    counter1: 0,
    counter2: 0,
  });

  const [customState, setCustomState] = React.useState<{ counter3: number }>({
    counter3: 0,
  });

  const [counter4, setCounter4] = React.useState(0);

  console.log('State change! Render!');

  return (
    <>
      <div className='row'>
        <h1>Counter 1: {commonState.counter1}</h1>
        <h1>Counter 2: {commonState.counter2}</h1>
        <h1>Counter 3: {customState.counter3}</h1>
        <h1>Counter 4: {counter4}</h1>
      </div>
      <div className='row'>
        <button
          className='btn btn-primary mb-1'
          onClick={() =>
            setCommonState({
              ...commonState,
              counter1: commonState.counter1 + 1,
            })
          }
        >
          Counter 1 (+1)
        </button>

        <button
          className='btn btn-primary mb-1'
          onClick={() =>
            setCommonState({
              ...commonState,
              counter2: commonState.counter2 + 1,
            })
          }
        >
          Counter 2 (+1)
        </button>

        <button
          className='btn btn-primary mb-1'
          onClick={() =>
            setCustomState({
              ...customState,
              counter3: customState.counter3 + 1,
            })
          }
        >
          Counter 3 (+1)
        </button>

        <button
          className='btn btn-primary'
          onClick={() => setCounter4(counter4 + 1)}
        >
          Counter 3 (+1)
        </button>
      </div>
    </>
  );
};

import * as React from 'react';

import Queue from './Queue';

export default () => {
  const queueRef = React.useRef(new Queue<string>());
  const [, setState] = React.useState();
  const [item, setItem] = React.useState('');

  const forceRender = () => setState({});

  return (
    <div>
      <p>queue: {queueRef.current.toString()}</p>
      <div>
        <input value={item} onChange={event => setItem(event?.target.value)} />
        <button
          disabled={!item}
          onClick={() => {
            queueRef.current.enqueue(item);
            forceRender();
          }}
        >
          enqueue
        </button>
      </div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        <button onClick={() => console.log(queueRef.current.isEmpty())}>
          print isEmpty of queue
        </button>
        <button
          onClick={() => {
            console.log(queueRef.current.dequeue());
            forceRender();
          }}
        >
          dequeue
        </button>
        <button onClick={() => console.log(queueRef.current.first())}>
          print first of queue
        </button>
        <button onClick={() => console.log(queueRef.current.last())}>
          print last of queue
        </button>
        <button
          onClick={() => {
            queueRef.current.clear();
            forceRender();
          }}
        >
          clear queue
        </button>
      </div>
    </div>
  );
};

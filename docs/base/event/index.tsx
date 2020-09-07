import * as React from 'react';

import Event from './event';

function handleHelloEvent1() {
  console.log('Event emit: hello, 1st');
}

function handleHelloEvent2() {
  console.log('Event emit: hello, 2nd');
}
function handleWorldEvent() {
  console.log('Event emit: world');
}

export default () => {
  const eventRef = React.useRef(new Event());

  React.useEffect(() => {
    eventRef.current.on('hello', handleHelloEvent1);
    eventRef.current.on('hello', handleHelloEvent2);
    eventRef.current.on('world', handleWorldEvent);
  }, []);

  return (
    <div>
      <button onClick={() => eventRef.current.emit('hello')}>
        Call hello event
      </button>
      <button onClick={() => eventRef.current.on('hello', handleHelloEvent1)}>
        Add hello event 1
      </button>
      <button onClick={() => eventRef.current.on('hello', handleHelloEvent2)}>
        Add hello event 2
      </button>
      <button onClick={() => eventRef.current.off('hello', handleHelloEvent1)}>
        Remove hello event 1
      </button>
      <button onClick={() => eventRef.current.off('hello', handleHelloEvent2)}>
        Remove hello event 2
      </button>
      <br />
      <br />
      <button onClick={() => eventRef.current.emit('world')}>
        Call world event
      </button>
      <button onClick={() => eventRef.current.on('world', handleWorldEvent)}>
        Add world event
      </button>
      <button onClick={() => eventRef.current.off('world', handleWorldEvent)}>
        Remove world event
      </button>
    </div>
  );
};

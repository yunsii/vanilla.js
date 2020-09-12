import * as React from 'react';

import throttle from './throttle';

export default () => {
  const [clickCount, setClickCount] = React.useState(0);
  const [count, setCount] = React.useState(0);

  function handleClick() {
    console.log('hello, throttle');
    setCount(prevCount => prevCount + 1);
  }

  const throttleHandleClick = React.useCallback(throttle(handleClick, 500), []);

  return (
    <div>
      <p>click count: {clickCount}</p>
      <p>call count: {count}</p>
      <button
        onClick={() => {
          setClickCount(prevCount => prevCount + 1);
          throttleHandleClick();
        }}
      >
        Throttle Call
      </button>
    </div>
  );
};

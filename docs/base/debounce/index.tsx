import * as React from 'react';

import debounce from './debounce';

export default () => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    console.log('hello, debounce');
    setCount(count + 1);
  }

  return (
    <div>
      call count: {count}
      <br />
      <button onClick={debounce(handleClick, 500)}>Debounce Call</button>
    </div>
  );
};

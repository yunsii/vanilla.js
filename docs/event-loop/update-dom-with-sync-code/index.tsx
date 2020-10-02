import * as React from 'react';

export default () => {
  function handleClick() {
    const initTime = new Date().valueOf();
    while (true) {
      console.log('verbose');
      if (initTime + 3000 <= new Date().valueOf()) {
        document.getElementById('target')!.innerHTML = 'asdf';
        document.getElementById('target')!.innerHTML = 'asdf1';
        document.getElementById('target')!.innerHTML = 'asdf2';
        document.getElementById('target')!.innerHTML = 'asdf3';
        console.log('break');
        break;
      }
    }
  }

  return (
    <div>
      <div id="target">Waiting...</div>
      <button onClick={handleClick}>Start</button>
      <button onClick={() => console.log('click test button')}>Test</button>
    </div>
  );
};

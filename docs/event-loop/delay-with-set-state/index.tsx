import * as React from 'react';

function delay(wait: number = 1) {
  return new Promise<void>(res => {
    setTimeout(() => {
      res();
    }, wait * 1000);
  });
}

export default () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    delay().then(async () => {
      while (true) {
        await delay();
        setCount(prevCount => {
          console.log('prevCount', prevCount);
          return prevCount + 1;
        });
      }
    });
  }, []);

  return (
    <div>
      <button onClick={() => console.log('hello')}>console {count}</button>
    </div>
  );
};

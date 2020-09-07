export default function debounce(fn: Function, delay: number) {
  let timeout: NodeJS.Timeout | undefined;

  return function(this: any) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), delay);
  };
}

export default class {
  tasks: { [k: string]: Function[] } = {};

  _existedFn(fn: Function, fns: Function[]) {
    return !!fns.includes(fn);
  }

  _deleteEmptyKey(name: string) {
    if (this.tasks[name].length === 0) {
      delete this.tasks[name];
    }
  }

  on(name: string, fn: Function) {
    const fns = this.tasks[name];
    if (fns) {
      if (!this._existedFn(fn, fns)) {
        this.tasks[name] = [...this.tasks[name], fn];
      }
      // 否则，已存在的事件回调函数
    } else {
      this.tasks[name] = [fn];
    }
  }

  off(name: string, fn: Function) {
    const fns = this.tasks[name];
    if (fns) {
      this.tasks[name] = this.tasks[name].filter(item => item !== fn);
      // 如果注册的事件队列为空时，移除该键值对，使得当找到一个事件队列时，一定不为空
      this._deleteEmptyKey(name);
    }
  }

  emit(name: string) {
    const fns = this.tasks[name];
    if (fns) {
      this.tasks[name].forEach(fn => {
        fn();
      });
    }
  }
}

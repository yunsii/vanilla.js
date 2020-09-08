export default class {
  tasks: { name: string; fns?: Function[] }[] = [];

  _existedFn(fn: Function, fns: Function[]) {
    return !!fns.includes(fn);
  }

  _getTargetIndex(name: string, fn?: Function) {
    return this.tasks.findIndex(
      item =>
        item.name === name && (fn ? this._existedFn(fn, item.fns!) : true),
    );
  }

  on(name: string, fn: Function) {
    const targetIndex = this._getTargetIndex(name);
    if (targetIndex >= 0) {
      if (!this._existedFn(fn, this.tasks[targetIndex].fns!)) {
        this.tasks[targetIndex].fns = [...this.tasks[targetIndex].fns!, fn];
      }
      // 否则，已存在的事件处理函数
    } else {
      this.tasks.push({ name, fns: [fn] });
    }
  }

  off(name: string, fn: Function) {
    const targetIndex = this._getTargetIndex(name, fn);
    if (targetIndex >= 0) {
      if (this.tasks[targetIndex].fns?.length === 1) {
        // 仅有一个处理函数时，清除注册对象
        this.tasks = this.tasks.filter((_, index) => index !== targetIndex);
      } else {
        this.tasks[targetIndex].fns = this.tasks[targetIndex].fns!.filter(
          item => item !== fn,
        );
      }
    }
  }

  emit(name: string) {
    const targetIndex = this._getTargetIndex(name);
    if (targetIndex >= 0) {
      // 当找到一个注册对象时，一定有注册函数
      this.tasks[targetIndex].fns!.forEach(fn => {
        fn();
      });
    }
  }
}

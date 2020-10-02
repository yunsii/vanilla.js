class Queue<T = any> {
  data: T[] = [];

  enqueue(item: T) {
    this.data.push(item);
  }

  isEmpty() {
    return this.data.length === 0;
  }

  dequeue() {
    return this.isEmpty() ? undefined : this.data.shift();
  }

  first() {
    return this.isEmpty() ? undefined : this.data[0];
  }

  last() {
    return this.isEmpty() ? undefined : this.data[this.data.length - 1];
  }

  toString() {
    return this.data.join('\n');
  }

  clear() {
    delete (this as any).data;
    this.data = [];
  }
}

export default Queue;

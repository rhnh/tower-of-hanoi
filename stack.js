(function (global) {
  const createStack = function (arr) {
    return new createStack.Init(arr);
  };
  createStack.prototype = {
    remove() {
      if (this.items.length > 0) this.items.pop();
      return this;
    },
    isEmpty() {
      return this.items.length === 0;
    },
    size() {
      return this.items.length;
    },
    clear() {
      this.items = [];
      return this;
    },
    peek() {
      return this.items[this.items.length - 1];
    },
    add(element) {
      this.items.push(element);
      return this;
    },
    addSmaller(element) {
      if (element < this.peek()) {
        this.add(element);
        return this;
      }
      return this;
    },
  };

  createStack.Init = function (arr) {
    let self = this;
    const isArray = typeof arr !== undefined && Array.isArray(arr);
    self.items = isArray ? arr : [];
    return self;
  };

  createStack.Init.prototype = createStack.prototype;
  global.createStack = createStack;
})(globalThis);

(function (global) {
  const createSprite = function (x, y, arr) {
    return new createSprite.Create(x, y, arr);
  };

  createSprite.prototype = {
    getX() {
      return this.x;
    },
    setX(x) {
      this.x = x;
      return this;
    },
    getY() {
      return this.y;
    },
    setY(y) {
      this.y = y;
      return this;
    },
  };

  createSprite.Create = function (x, y, discsArray = []) {
    const self = this;
    self.x = x;
    self.y = y;
    self.discs = createStack(discsArray);
    return self;
  };

  createSprite.Create.prototype = createSprite.prototype;
  global.createSprite = createSprite;
})(globalThis);

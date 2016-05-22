const Rule = require('./Rule.js');

module.exports = class Game {

  constructor(rule = null) {
    if(rule == null) {
      throw new Error('Illegal Argument');
    }
    this.rule = rule;
  }

  toString() {
    return `{ rule: ${this.rule} }`
  }
}

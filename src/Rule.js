module.exports = class Rule {

  constructor(name = null, library = null) {
    if(typeof name !== 'string') {
      throw new Error('Illegal Argument');
    }
    this.name = name;

    if(!Array.isArray(library)) {
      throw new Error('Illegal Argument');
    }
    this.library = library;
  }

  toString() {
    return `{ name: ${this.name} }`
  }
}

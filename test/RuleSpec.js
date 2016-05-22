const assert = require('assert');
const Rule = require('../src/Rule.js');


describe('Rule', () => {

  describe('#consructor(name, library)', () => {

    context('with undefined name, valid library', () => {
      let name;
      const library = [];
      it('throws error', () => {
        assert.throws(() => new Rule(name, library));
      }, Error);
    });

    context('with valid name, undefined library', () => {
      const name = "name";
      let library;
      it('throws error', () => {
        console.log(`library=${library}`);
        assert.throws(() => new Rule(name, library));
      }, Error);
    });

    context('with valid name, valid library', () => {
      const name = 'name';
      const library = [];
      it('does not throw error', () => {
        assert.doesNotThrow(() => new Rule(name, library));
      }, Error);
    });
  });

  describe('#toString()', () => {
    let name;
    const subject = () => new Rule(name, []).toString();

    context('with "name" as name', () => {
      name = 'name';
      it('returns "{ name: name }"', () => {
        assert.equal('{ name: name }', subject());
      });
    });
  });
});

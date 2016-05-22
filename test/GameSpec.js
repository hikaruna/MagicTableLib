const assert = require('assert');
const Game = require('../src/Game.js');
const Rule = require('../src/Rule.js');


describe('Game', () => {

  describe('#consructor(rule)', () => {

    context('with undefined rule', () => {
      const rule = undefined;
      it('throws error', () => {
        assert.throws(() => new Game(rule));
      }, Error);
    });

    context('with valid rule', () => {
      const rule = new Rule('name', []);
      it('does not throw error', () => {
        assert.doesNotThrow(() => new Game(rule));
      }, Error);
    });
  });

  const game = new Game(new Rule('name', []));

  describe('#toString()', () => {
    const subject = game.toString();

    it('returns String', () => {
      assert.equal('string', typeof subject);
    });
  });
});

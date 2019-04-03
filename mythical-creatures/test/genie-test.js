const assert = require('chai').assert;
const Genie = require('../exercises/genie');
const StreetRat = require('../exercises/streetRat');
const Sorcerer = require('../exercises/sorcerer');



describe('Genie default properties', () => {

  it('Should be a function', () => {
    assert.isFunction(Genie);
  });

  it('Should instantiate Genie', () => {
    const genie = new Genie;
    assert.isObject(genie);
  });

  it('Should have a name', () => {
    const genie = new Genie('Robbie');
    assert.equal(genie.name, 'Robbie');
  });

  it('Should start off enslaved', () => {
    const genie = new Genie('Robbie');
    assert.equal(genie.isFree, false);
  });

  it('Should have a color blue', () => {
    const genie = new Genie('Khalid');
    assert.equal(genie.color, 'Blue');
  });
});

describe('StreetRat default properties', () => {

  it('Should be a function', () => {
    assert.isFunction(StreetRat);
  });

  it('Should instantiate StreetRat', () => {
    const streetRat = new StreetRat('Jeff');
    assert.isObject(streetRat);
  });

  it('Should have a name', () => {
    const streetRat = new StreetRat('Jeff');
    assert.equal(streetRat.name, 'Jeff');
  });

  it('Should be a diamond in the rough', () => {
    const streetRat = new StreetRat('Jeff');
    assert.equal(streetRat.isDiamondInTheRough, true);
  });
});

describe('Sorcerer default properties', () => {

  it('Should be a function', () => {
    assert.isFunction(Sorcerer);
  });

  it('Should instantiate Sorcerer', () => {
    const sorcerer = new Sorcerer('Louisa');
    assert.equal(sorcerer);
  });

  it('Should have a name', () => {
    const sorcerer = new Sorcerer('Lousia');
    assert.equal(sorcerer.name, 'Louisa');
  });

  it('Should not be a diamond in the rough', () => {
    const sorcerer = new Sorcerer('Louisa');
    assert.equal(sorcerer.isDiamondInTheRough, false)
  });

  it('Should have ')
});